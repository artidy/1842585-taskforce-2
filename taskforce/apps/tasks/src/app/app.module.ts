import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [PrismaModule, CategoryModule, StatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
