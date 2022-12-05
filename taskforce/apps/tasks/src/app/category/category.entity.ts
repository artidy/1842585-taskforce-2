import { Entity } from '@taskforce/core';
import { Category } from '@taskforce/shared-types';

export class CategoryEntity implements Entity<Category>, Category {
  id: number;
  title: string;

  constructor(category: Category) {
    this.fillEntity(category);
  }

  fillEntity(entity: Category) {
    this.title = entity.title;
    this.id = entity.id;
  }

  toObject(): CategoryEntity {
    return { ...this };
  }
}
