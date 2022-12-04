import { Entity } from '@taskforce/core';
import { Tag } from '@taskforce/shared-types';

export class TagEntity implements Entity<Tag>, Tag {
  id: number;
  title: string;

  constructor(status: Tag) {
    this.fillEntity(status);
  }

  fillEntity(entity: Tag) {
    this.id = entity.id;
    this.title = entity.title;
  }

  toObject(): Tag {
    return { ...this };
  }
}
