import { Injectable } from '@nestjs/common';

import { StatusRepository } from './status.repository';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status } from '@taskforce/shared-types';
import { StatusEntity } from './status.entity';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepository: StatusRepository) {}

  public async create(dto: CreateStatusDto): Promise<Status> {
    return this.statusRepository.create(new StatusEntity(dto));
  }

  public async update(id: number, dto: UpdateStatusDto): Promise<Status | null> {
    return this.statusRepository.update(id, new StatusEntity(dto));
  }

  public async findById(id: number): Promise<Status | null> {
    return this.statusRepository.findById(id);
  }

  public async findAll(): Promise<Status[]> {
    return this.statusRepository.findAll();
  }

  public async delete(id: number): Promise<void> {
    return this.statusRepository.destroy(id);
  }
}
