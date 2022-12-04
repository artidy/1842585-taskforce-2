import { Injectable } from '@nestjs/common';

import { CandidateRepository } from './candidate.repository';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { Candidate } from '@taskforce/shared-types';
import { CandidateEntity } from './candidate.entity';

@Injectable()
export class CandidateService {
  constructor(private readonly statusRepository: CandidateRepository) {}

  public async create(dto: CreateCandidateDto): Promise<Candidate> {
    return this.statusRepository.create(new CandidateEntity(dto));
  }

  public async findById(id: number): Promise<Candidate | null> {
    return this.statusRepository.findById(id);
  }

  public async findByUserId(userId: string): Promise<Candidate[]> {
    return this.statusRepository.findByUserId(userId);
  }

  public async findByTaskId(taskId: number): Promise<Candidate[]> {
    return this.statusRepository.findByTaskId(taskId);
  }

  public async delete(id: number): Promise<void> {
    return this.statusRepository.destroy(id);
  }
}
