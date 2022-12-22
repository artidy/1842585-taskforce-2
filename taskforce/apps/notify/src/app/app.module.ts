import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ENV_FILE_PATH } from './app.constant';
import { mailOptions } from '../config/mail.config';
import { validateEnvironments } from './env.validation';
import { MailModule } from './mail/mail.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { databaseConfig, getMongoDbConfig } from '@taskforce/core';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [ mailOptions, databaseConfig ],
      validate: validateEnvironments,
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    MailModule,
    SubscriberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
