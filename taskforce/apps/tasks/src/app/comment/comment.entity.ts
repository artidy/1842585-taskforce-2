import { Entity } from '@taskforce/core';
import { Comment } from '@taskforce/shared-types';

export class CommentEntity implements Entity<Comment>, Comment {
  id: number;
  text: string;
  createdAt: Date;
  taskId: number;
  userId: string;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  fillEntity(entity: Comment) {
    this.id = entity.id;
    this.text = entity.text;
    this.taskId = entity.taskId;
    this.userId = entity.userId;
  }

  toObject(): Comment {
    return { ...this };
  }


}
