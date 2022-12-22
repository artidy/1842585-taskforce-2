import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { fillObject, MongoidValidationPipe } from '@taskforce/core';
import { SubscriberRdo } from './rdo/subscriber.rdo';

@ApiTags('subscribers')
@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Успешно получен список подписчиков'
  })
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async index() {
    const subscribers = await this.subscriberService.findAll();

    return fillObject(SubscriberRdo, subscribers);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Подписчик успешно добавлен'
  })
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async add(@Body() dto: CreateSubscriberDto) {
    const subscriber = await this.subscriberService.add(dto);

    return fillObject(SubscriberRdo, subscriber);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Подписчик успешно удален'
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', MongoidValidationPipe) id: string) {
    return await this.subscriberService.delete(id);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Подписчик успешно получен'
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findById(@Param('id', MongoidValidationPipe) id: string) {
    return this.subscriberService.findById(id);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные подписчика успешно обновлены'
  })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  public async update(@Param('id', MongoidValidationPipe) id: string, @Body() dto: UpdateSubscriberDto) {
    return this.subscriberService.update(id, dto);
  }
}
