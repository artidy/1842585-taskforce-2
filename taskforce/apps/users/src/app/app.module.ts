import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { ENV_FILE_PATH } from './app.constant';
import databaseConfig from '../config/database.config';
import { validateEnvironments } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
      validate: validateEnvironments,
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
