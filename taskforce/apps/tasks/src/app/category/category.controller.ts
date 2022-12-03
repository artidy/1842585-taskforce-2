import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { CategoryService } from './category.service';
import { fillObject } from '@taskforce/core';
import { CategoryRdo } from './rdo/category.rdo';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    const category = await this.categoryService.findById(categoryId);

    return fillObject(CategoryRdo, category);
  }

  @Get('/')
  public async index() {
    const categories = await this.categoryService.findAll();

    return fillObject(CategoryRdo, categories);
  }

  @Post('/')
  public async create(@Body() dto: CreateCategoryDto) {
    const category = await this.categoryService.create(dto);

    return fillObject(CategoryRdo, category);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    const categoryId = parseInt(id, 10);
    const category = await this.categoryService.update(categoryId, dto);

    return fillObject(CategoryRdo, category);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);

    await this.categoryService.delete(categoryId);
  }
}
