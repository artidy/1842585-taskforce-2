import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { TagService } from './tag.service';
import { fillObject } from '@taskforce/core';
import { TagRdo } from './rdo/tag.rdo';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index() {
    const tags = await this.tagService.findAll();

    return fillObject(TagRdo, tags);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id', ParseIntPipe) id: number) {
    const tag = await this.tagService.findById(id);

    return fillObject(TagRdo, tag);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateTagDto) {
    const tag = await this.tagService.create(dto);

    return fillObject(TagRdo, tag);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTagDto) {
    const tag = await this.tagService.update(id, dto);

    return fillObject(TagRdo, tag);
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
