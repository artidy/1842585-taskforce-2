import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';
import { TagModule } from './tag/tag.module';
import { CandidateModule } from './candidate/candidate.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    PrismaModule,
    CategoryModule,
    StatusModule,
    TagModule,
    CandidateModule,
    CommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
