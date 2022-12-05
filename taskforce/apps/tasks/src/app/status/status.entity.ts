import { Entity } from '@taskforce/core';
import { Status } from '@taskforce/shared-types';

export class StatusEntity implements Entity<Status>, Status {
  id: number;
  title: string;

  constructor(status: Status) {
    this.fillEntity(status);
  }

  fillEntity(entity: Status) {
    this.id = entity.id;
    this.title = entity.title;
  }

  toObject(): Status {
    return { ...this };
  }
}
