import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {AuthUserMemoryRepository} from './auth-user-memory.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthUserMemoryRepository],
})
export class AuthModule {}
