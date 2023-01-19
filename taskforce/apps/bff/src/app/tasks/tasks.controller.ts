import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index(@Query () query) {
    return this.tasksService.getAll(query);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: number) {
    return this.tasksService.getById(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() task) {
    return this.tasksService.create(task);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() task) {
    return this.tasksService.update(id, task);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number) {
    await this.tasksService.delete(id);
  }
}
