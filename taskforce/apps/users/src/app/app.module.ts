import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { databaseConfig, getMongoDbConfig, jwtOptions } from '@taskforce/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig, jwtOptions],
      validate: validateEnvironments,
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
