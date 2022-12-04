import { Module } from '@nestjs/common';

import { CandidateController } from './candidate.controller';
import { CandidateRepository } from './candidate.repository';
import { CandidateService } from './candidate.service';

@Module({
  imports: [],
  controllers: [CandidateController],
  providers: [CandidateRepository, CandidateService],
  exports: [CandidateService]
})
export class CandidateModule {}
