import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { StatusService } from './status.service';
import { fillObject } from '@taskforce/core';
import { StatusRdo } from './rdo/status.rdo';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('statuses')
@Controller('statuses')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index() {
    const statuses = await this.statusService.findAll();

    return fillObject(StatusRdo, statuses);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: string) {
    const statusId = parseInt(id, 10);
    const status = await this.statusService.findById(statusId);

    return fillObject(StatusRdo, status);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateStatusDto) {
    const status = await this.statusService.create(dto);

    return fillObject(StatusRdo, status);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    const statusId = parseInt(id, 10);
    const status = await this.statusService.update(statusId, dto);

    return fillObject(StatusRdo, status);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const statusId = parseInt(id, 10);

    await this.statusService.delete(statusId);
  }
}
