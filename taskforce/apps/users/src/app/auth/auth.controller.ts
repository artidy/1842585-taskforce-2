import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';

import {CreateUserDto} from './dto/create-user.dto';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }
}
