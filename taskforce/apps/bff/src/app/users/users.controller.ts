import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

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
  public async login(@Body() user) {
    return this.usersService.login(user);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() user) {
    return this.usersService.register(user);
  }
}
