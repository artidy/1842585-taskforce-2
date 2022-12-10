import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { TaskService } from './task.service';
import { fillObject } from '@taskforce/core';
import { TaskRdo } from './rdo/task.rdo';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly tagService: TaskService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index() {
    const tasks = await this.tagService.findAll();

    return fillObject(TaskRdo, tasks);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id', ParseIntPipe) id: number) {
    const task = await this.tagService.findById(id);

    return fillObject(TaskRdo, task);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateTaskDto) {
    const task = await this.tagService.create(dto);

    return fillObject(TaskRdo, task);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTaskDto) {
    const task = await this.tagService.update(id, dto);

    return fillObject(TaskRdo, task);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    await this.tagService.delete(id);
  }
}
