import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ENV_FILE_PATH } from './app.constant';
import { mailOptions } from '../config/mail.config';
import { validateEnvironments } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [ mailOptions ],
      validate: validateEnvironments,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
