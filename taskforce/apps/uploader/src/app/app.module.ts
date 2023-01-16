import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { databaseConfig, getMongoDbConfig } from '@taskforce/core';

import { ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { getMulterConfig, multerOptions } from '../config/multer.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [ databaseConfig, multerOptions ],
      validate: validateEnvironments,
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    MulterModule.registerAsync(
      getMulterConfig()
    )
  ]
})
export class AppModule {}
