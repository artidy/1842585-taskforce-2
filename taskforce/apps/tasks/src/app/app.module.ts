import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [PrismaModule, CategoryModule, StatusModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
