import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ENV_FILE_PATH } from './app.constant';
import { mailOptions } from '../config/mail.config';
import { validateEnvironments } from './env.validation';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [ mailOptions ],
      validate: validateEnvironments,
    }),
    MailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
