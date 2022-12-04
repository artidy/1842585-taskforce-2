import { Entity } from '@taskforce/core';
import { Candidate, Category, Comment, Status, Tag, Task } from '@taskforce/shared-types';

export class TaskEntity implements Entity<Task>, Task {
  id: number;
  title: string;
  address: string;
  budget: number;
  category: Category;
  createdAt: Date;
  customerId: string;
  deadline: Date;
  description: string;
  performerId: string;
  tags: Tag[];
  candidates: Candidate[];
  comments: Comment[];
  status: Status;
  preview: string;

  constructor(task: Task) {
    this.fillEntity(task);
  }

  fillEntity(entity: Task) {
    this.id = entity.id;
    this.title = entity.title;
    this.address = entity.address;
    this.budget = entity.budget;
    this.category = entity.category;
    this.customerId = entity.customerId;
    this.deadline = entity.deadline;
    this.description = entity.description;
    this.performerId = entity.performerId;
    this.tags = entity.tags;
    this.candidates = entity.candidates;
    this.comments = entity.comments;
    this.status = entity.status;
    this.preview = entity.preview;
  }

  toObject(): Task {
    return { ...this };
  }
}
