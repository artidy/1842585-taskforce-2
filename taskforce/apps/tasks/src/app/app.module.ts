import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';
import { TagModule } from './tag/tag.module';
import { CandidateModule } from './candidate/candidate.module';
import { CommentModule } from './comment/comment.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    PrismaModule,
    CategoryModule,
    StatusModule,
    TagModule,
    CandidateModule,
    CommentModule,
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
