import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

import { CRUDRepository } from '@taskforce/core';
import { CommentEntity } from './comment.entity';
import { Comment } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentRepository implements CRUDRepository<CommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) {}
  public async create(item: CommentEntity): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        id
      }
    });
  }

  public async findById(id: number): Promise<Comment | null> {
    return this.prisma.comment.findFirst({
      where: {
        id
      }
    });
  }

  public async findByUserId(userId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        userId
      }
    });
  }

  public async update(id: number, item: CommentEntity): Promise<Comment> {
    return this.prisma.comment.update({
      where: {
        id
      },
      data: {
        text: item.text,
        updatedAt: dayjs().toDate()
      }
    });
  }
}
