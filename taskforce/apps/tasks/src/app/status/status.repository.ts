import { Injectable } from '@nestjs/common';

import { CRUDRepository } from '@taskforce/core';
import { StatusEntity } from './status.entity';
import { Status } from '@taskforce/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatusRepository implements CRUDRepository<StatusEntity, number, Status> {
  constructor(private readonly prisma: PrismaService) {}
  public async create(item: StatusEntity): Promise<Status> {
    return this.prisma.status.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.status.delete({
      where: {
        id
      }
    });
  }

  public async findById(id: number): Promise<Status | null> {
    return this.prisma.status.findFirst({
      where: {
        id
      }
    });
  }

  public async findAll(): Promise<Status[]> {
    return this.prisma.status.findMany();
  }

  update(id: number, item: StatusEntity): Promise<Status> {
    return this.prisma.status.update({
      where: {
        id
      },
      data: {
        ...item.toObject()
      }
    });
  }
}
