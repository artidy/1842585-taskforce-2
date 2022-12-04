import { Injectable } from '@nestjs/common';

import { TagRepository } from './tag.repository';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from '@taskforce/shared-types';
import { TagEntity } from './tag.entity';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly statusRepository: TagRepository) {}

  public async create(dto: CreateTagDto): Promise<Tag> {
    return this.statusRepository.create(new TagEntity(dto));
  }

  public async update(id: number, dto: UpdateTagDto): Promise<Tag | null> {
    return this.statusRepository.update(id, new TagEntity(dto));
  }

  public async findById(id: number): Promise<Tag | null> {
    return this.statusRepository.findById(id);
  }

  public async findAll(): Promise<Tag[]> {
    return this.statusRepository.findAll();
  }

  public async delete(id: number): Promise<void> {
    return this.statusRepository.destroy(id);
  }
}
