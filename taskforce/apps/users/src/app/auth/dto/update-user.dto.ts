import {ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsEnum, IsISO8601, IsOptional, IsString } from 'class-validator';

import {UserRole} from '@taskforce/shared-types';
import { UserErrorMessages } from '../../app.constant';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    required: false,
    example: 'example@mail.com'
  })
  @IsOptional()
  @IsEmail(
    {},
    {
      message: UserErrorMessages.EmailNotValid
  })
  public email?: string;

  @ApiProperty({
    description: 'Имя пользователя',
    required: false,
    example: 'Андрей'
  })
  @IsOptional()
  @IsString()
  public firstname?: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    required: false,
    example: 'Иванов'
  })
  @IsOptional()
  @IsString()
  public lastname?: string;

  @ApiProperty({
    description: 'Город проживания пользователя',
    required: false,
    example: 'Астана'
  })
  @IsOptional()
  @IsString()
  public city?: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: false,
    example: '123456789'
  })
  @IsOptional()
  @IsString()
  public password?: string;

  @ApiProperty({
    description: 'Роль пользователя',
    required: false,
    example: UserRole.Performer
  })
  @IsOptional()
  @IsEnum(UserRole)
  public role?: UserRole;

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
