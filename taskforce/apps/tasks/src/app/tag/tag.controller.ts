import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { TagService } from './tag.service';
import { fillObject } from '@taskforce/core';
import { TagRdo } from './rdo/tag.rdo';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/')
  public async index() {
    const tags = await this.tagService.fundAll();

    return fillObject(TagRdo, tags);
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    const tag = await this.tagService.findById(tagId);

    return fillObject(TagRdo, tag);
  }

  @Post('/')
  public async create(@Body() dto: CreateTagDto) {
    const tag = await this.tagService.create(dto);

    return fillObject(TagRdo, tag);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateTagDto) {
    const tagId = parseInt(id, 10);
    const tag = await this.tagService.update(tagId, dto);

    return fillObject(TagRdo, tag);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const tagId = parseInt(id, 10);

    await this.tagService.delete(tagId);
  }
}
