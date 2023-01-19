import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { notifyConfig } from '../config/notify.config';
import { tasksConfig } from '../config/tasks.config';
import { uploaderConfig } from '../config/uploader.config';
import { usersConfig } from '../config/users.config';
import { getHttpConfig, httpOptions } from '../config/http.config';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [
        notifyConfig,
        tasksConfig,
        uploaderConfig,
        usersConfig,
        httpOptions
      ],
      validate: validateEnvironments,
    }),
    HttpModule.registerAsync(getHttpConfig()),
    UsersModule,
    TasksModule,
  ]
})
export class AppModule {}
