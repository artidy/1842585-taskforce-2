import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно авторизовались'
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() dto: LoginUserDto) {
    return this.usersService.login(dto);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateUserDto) {
    return this.usersService.register(dto);
  }
}
