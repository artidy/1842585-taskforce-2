import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { MongoidValidationPipe } from '@taskforce/core';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно авторизовались'
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() dto: LoginUserDto) {
    return await this.authService.login(dto);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные пользователя успешно обновлены'
  })
  @Put(':id')
  public async put(@Param('id', MongoidValidationPipe) id: string, @Body() dto: UpdateUserDto) {
    return await this.authService.update(id, dto);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Пользователь успешно удален'
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', MongoidValidationPipe) id: string) {
    return await this.authService.delete(id);
  }
}
