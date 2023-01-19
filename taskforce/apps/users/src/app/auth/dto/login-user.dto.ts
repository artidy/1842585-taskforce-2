import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { UserErrorMessages } from '../../app.constant';

export class LoginUserDto {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    required: true,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: UserErrorMessages.EmailNotValid
  })
  public email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: true,
    example: '123456789'
  })
  @IsString()
  public password: string;
}
