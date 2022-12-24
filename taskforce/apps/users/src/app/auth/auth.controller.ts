import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { fillObject, MongoidValidationPipe } from '@taskforce/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';

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
    const user = await this.authService.checkUser(dto);
    const token = await this.authService.login(user);

    return fillObject(LoggedUserRdo, {
      _id: user._id,
      email: user.email,
      accessToken: token.access_token,
    });
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateUserDto) {
    const user = this.authService.register(dto);

    return fillObject(UserRdo, user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные пользователя успешно обновлены'
  })
  @Put(':id')
  public async put(@Param('id', MongoidValidationPipe) id: string, @Body() dto: UpdateUserDto) {
    const user = this.authService.update(id, dto);

    return fillObject(UserRdo, user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Пользователь успешно удален'
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', MongoidValidationPipe) id: string) {
    return this.authService.delete(id);
  }
}
