import { Entity } from '@taskforce/core';
import { Candidate } from '@taskforce/shared-types';

export class CandidateEntity implements Entity<Candidate>, Candidate {
  id: number;
  userId: string;
  taskId: number;

  constructor(candidate: Candidate) {
    this.fillEntity(candidate);
  }

  fillEntity(entity: Candidate) {
    this.userId = entity.userId;
  }

  toObject(): Candidate {
    return { ...this };
  }
}
