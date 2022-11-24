import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthUserModel, AuthUserSchema } from './auth-user.model';
import { AuthUserRepository } from './auth-user-repository';

@Module({
  imports: [MongooseModule.forFeature([
    { name: AuthUserModel.name, schema: AuthUserSchema }
  ])],
  controllers: [AuthController],
  providers: [AuthService, AuthUserRepository],
})
export class AuthModule {}
