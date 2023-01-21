import { Injectable } from '@nestjs/common';

import { CRUDRepository } from '@taskforce/core';
import { CandidateEntity } from './candidate.entity';
import { Candidate } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CandidateRepository implements CRUDRepository<CandidateEntity, number, Candidate> {
  constructor(private readonly prisma: PrismaService) {}
  public async create(item: CandidateEntity): Promise<Candidate> {
    return this.prisma.candidate.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.candidate.delete({
      where: {
        id
      }
    });
  }

  public async findById(id: number): Promise<Candidate | null> {
    return this.prisma.candidate.findFirst({
      where: {
        id
      }
    });
  }

  public async findByUserId(userId: string): Promise<Candidate[]> {
    return this.prisma.candidate.findMany({
      where: {
        userId
      }
    });
  }

  update(_id: number, _item: CandidateEntity): Promise<Candidate> {
    return Promise.resolve(undefined);
  }
}
