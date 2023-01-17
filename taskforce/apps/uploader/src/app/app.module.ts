import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig, getMongoDbConfig } from '@taskforce/core';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ASSETS_DIRECTORY, ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { AvatarModule } from './avatar/avatar.module';
import { getFullPathDirectory } from './app.functions';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [ databaseConfig ],
      validate: validateEnvironments,
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    ServeStaticModule.forRoot({
      rootPath: getFullPathDirectory(''),
      serveRoot: `/${ASSETS_DIRECTORY}/`,
      exclude: ['/api*'],
    }),
    AvatarModule,
  ]
})
export class AppModule {}
