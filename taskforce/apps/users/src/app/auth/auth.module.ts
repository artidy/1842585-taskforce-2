import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthUserModel, AuthUserSchema } from './auth-user.model';
import { AuthUserRepository } from './auth-user-repository';
import { getJwtConfig } from '../../config/jwt.config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    MongooseModule.forFeature([
      { name: AuthUserModel.name, schema: AuthUserSchema }
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthUserRepository, JwtStrategy],
})
export class AuthModule {}
