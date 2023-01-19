import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig, getMongoDbConfig } from '@taskforce/core';

import { ENV_FILE_PATH } from './app.constant';
import { mailOptions } from '../config/mail.config';
import { validateEnvironments } from './env.validation';
import { MailModule } from './mail/mail.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { rabbitmqOptions } from '../config/rabbitmq.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [ mailOptions, databaseConfig, rabbitmqOptions ],
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
