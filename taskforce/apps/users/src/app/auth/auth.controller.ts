import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {Body, Controller, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';

import {CreateUserDto} from './dto/create-user.dto';
import {AuthService} from './auth.service';
import {UpdateUserDto} from './dto/update-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные пользователя успешно обновлены'
  })
  @Put(':id')
  async put(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return await this.authService.update(id, dto);
  }
}
