import { Injectable } from '@nestjs/common';

import { CRUDRepository } from '@taskforce/core';
import { TaskEntity } from './task.entity';
import { Task } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { TaskQuery } from './query/task.query';
import { SORT_DIRECTION, SortTypes } from '../app.constant';

@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, number, Task> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: TaskEntity): Promise<Task> {
    const dataEntity = item.toObject();
    return this.prisma.task.create({
      data: {
        title: dataEntity.title,
        description: dataEntity.description,
        address: dataEntity.address,
        budget: dataEntity.budget,
        customerId: dataEntity.customerId,
        deadline: dataEntity.deadline,
        preview: dataEntity.preview,
        category: {
          connect: {id: dataEntity.category.id}
        },
        status: {
          connect: {id: dataEntity.status.id}
        }
      },
      include: {
        category: true,
        candidates: true,
        tags: true,
        comments: true,
        status: true
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id
      }
    });
  }

  public async findById(id: number): Promise<Task | null> {
    return this.prisma.task.findFirst({
      where: {
        id
      },
      include: {
        category: true,
        candidates: true,
        tags: true,
        comments: true,
        status: true
      }
    });
  }

  public async findAll({ limit, category, tag, address, status, sortType, page }: TaskQuery): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        address: address,
        category: {
          id: category
        },
        tags: {
          some: {
            id: tag
          }
        },
        status: {
          id: status
        }
      },
      take: limit,
      include: {
        category: true,
        candidates: true,
        tags: true,
        comments: true,
        status: true
      },
      orderBy: [
        {
          createdAt: sortType === SortTypes.CreatedAt ? SORT_DIRECTION : undefined,
          comments: sortType === SortTypes.Comments ? {
            _count: SORT_DIRECTION
          } : undefined,
          candidates: sortType === SortTypes.Candidates ? {
            _count: SORT_DIRECTION
          } : undefined,
        },
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async update(id: number, item: TaskEntity): Promise<Task> {
    const dataEntity = item.toObject();
    return this.prisma.task.update({
      where: {
        id
      },
      data: {
        title: dataEntity.title,
        description: dataEntity.description,
        address: dataEntity.address,
        budget: dataEntity.budget,
        customerId: dataEntity.customerId,
        deadline: dataEntity.deadline,
        preview: dataEntity.preview,
        category: {
          connect: {id: dataEntity.category.id}
        },
        status: {
          connect: {id: dataEntity.status.id}
        }
      },
      include: {
        category: true,
        candidates: true,
        tags: true,
        comments: true,
        status: true
      }
    });
  }
}
