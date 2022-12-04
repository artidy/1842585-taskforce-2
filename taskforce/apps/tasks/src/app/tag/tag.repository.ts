import { Injectable } from '@nestjs/common';

import { CRUDRepository } from '@taskforce/core';
import { TagEntity } from './tag.entity';
import { Tag } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TagRepository implements CRUDRepository<TagEntity, number, Tag> {
  constructor(private readonly prisma: PrismaService) {}
  public async create(item: TagEntity): Promise<Tag> {
    return this.prisma.tag.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.tag.delete({
      where: {
        id
      }
    });
  }

  public async findById(id: number): Promise<Tag | null> {
    return this.prisma.tag.findFirst({
      where: {
        id
      }
    });
  }

  public async findAll(): Promise<Tag[]> {
    return this.prisma.tag.findMany();
  }

  public async update(id: number, item: TagEntity): Promise<Tag> {
    return this.prisma.tag.update({
      where: {
        id
      },
      data: {
        ...item.toObject()
      }
    });
  }
}
