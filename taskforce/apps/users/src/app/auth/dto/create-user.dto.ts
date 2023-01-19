import {ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsEnum, IsISO8601, IsOptional, IsString } from 'class-validator';

import {UserRole} from '@taskforce/shared-types';
import { UserErrorMessages } from '../../app.constant';

export class CreateUserDto {
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
    description: 'Имя пользователя',
    required: true,
    example: 'Андрей'
  })
  @IsString()
  public firstname: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    required: true,
    example: 'Иванов'
  })
  @IsString()
  public lastname: string;

  @ApiProperty({
    description: 'Город проживания пользователя',
    required: true,
    example: 'Астана'
  })
  @IsString()
  public city: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: true,
    example: '123456789'
  })
  @IsString()
  public password: string;

  @ApiProperty({
    description: 'Роль пользователя',
    required: true,
    example: UserRole.Performer
  })
  @IsEnum(UserRole)
  public role: UserRole;

  @ApiProperty({
    description: 'Аватар пользователя',
    required: false,
  })
  @IsOptional()
  @IsString()
  public avatar?: string;

  @ApiProperty({
    description: 'Дата рождения пользователя',
    required: false,
    example: '1986-11-22'
  })
  @IsOptional()
  @IsISO8601(
    {},
    {
      message: UserErrorMessages.DateBirthNotValid
  })
  public dataBirth?: string;
}
