import { Module } from '@nestjs/common';

import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';
import { CategoryModule } from '../category/category.module';
import { StatusModule } from '../status/status.module';

@Module({
  imports: [CategoryModule, StatusModule],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService]
})
export class TaskModule {}
