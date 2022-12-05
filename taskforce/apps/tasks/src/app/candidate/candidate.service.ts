import { Injectable } from '@nestjs/common';

import { CandidateRepository } from './candidate.repository';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { Candidate } from '@taskforce/shared-types';
import { CandidateEntity } from './candidate.entity';

@Injectable()
export class CandidateService {
  constructor(private readonly candidateRepository: CandidateRepository) {}

  public async create(dto: CreateCandidateDto): Promise<Candidate> {
    return this.candidateRepository.create(new CandidateEntity(dto));
  }

  public async findById(id: number): Promise<Candidate | null> {
    return this.candidateRepository.findById(id);
  }

  public async findByUserId(userId: string): Promise<Candidate[]> {
    return this.candidateRepository.findByUserId(userId);
  }

  public async findByTaskId(taskId: number): Promise<Candidate[]> {
    return this.candidateRepository.findByTaskId(taskId);
  }

  public async delete(id: number): Promise<void> {
    return this.candidateRepository.destroy(id);
  }
}
