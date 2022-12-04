import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { TaskService } from './task.service';
import { fillObject } from '@taskforce/core';
import { TaskRdo } from './rdo/task.rdo';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly tagService: TaskService) {}

  @Get('/')
  public async index() {
    const tasks = await this.tagService.findAll();

    return fillObject(TaskRdo, tasks);
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const taskId = parseInt(id, 10);
    const task = await this.tagService.findById(taskId);

    return fillObject(TaskRdo, task);
  }

  @Post('/')
  public async create(@Body() dto: CreateTaskDto) {
    const task = await this.tagService.create(dto);

    return fillObject(TaskRdo, task);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    const taskId = parseInt(id, 10);
    const task = await this.tagService.update(taskId, dto);

    return fillObject(TaskRdo, task);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const taskId = parseInt(id, 10);

    await this.tagService.delete(taskId);
  }
}
