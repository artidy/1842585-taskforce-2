import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { StatusService } from './status.service';
import { fillObject } from '@taskforce/core';
import { StatusRdo } from './rdo/status.rdo';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('statuses')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get('/')
  public async index() {
    const statuses = await this.statusService.fundAll();

    return fillObject(StatusRdo, statuses);
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const statusId = parseInt(id, 10);
    const status = await this.statusService.findById(statusId);

    return fillObject(StatusRdo, status);
  }

  @Post('/')
  public async create(@Body() dto: CreateStatusDto) {
    const status = await this.statusService.create(dto);

    return fillObject(StatusRdo, status);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    const statusId = parseInt(id, 10);
    const status = await this.statusService.update(statusId, dto);

    return fillObject(StatusRdo, status);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const statusId = parseInt(id, 10);

    await this.statusService.delete(statusId);
  }
}
