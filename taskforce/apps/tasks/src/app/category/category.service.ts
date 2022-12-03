import { Injectable } from '@nestjs/common';

import { Category } from '@taskforce/shared-types';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryEntity } from './category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async create(dto: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.create(new CategoryEntity(dto));
  }

  public async findById(id: number): Promise<Category | null> {
    return this.categoryRepository.findById(id);
  }

  public async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  public async update(id: number, dto: UpdateCategoryDto): Promise<Category> {
    return this.categoryRepository.update(id, new CategoryEntity(dto));
  }

  public async delete(id: number): Promise<void> {
    return this.categoryRepository.destroy(id);
  }
}
