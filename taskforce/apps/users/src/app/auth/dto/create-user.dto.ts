import {UserRole} from '@taskforce/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsISO8601, IsString } from 'class-validator';
import { AUTH_USER_DATE_BIRTH_NOT_VALID, AUTH_USER_EMAIL_NOT_VALID } from '../../app.constant';
import { Optional } from '@nestjs/common';

export class CreateUserDto {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    required: true,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: AUTH_USER_EMAIL_NOT_VALID
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
  @Optional()
  @IsString()
  public avatar?: string;

  @ApiProperty({
    description: 'Дата рождения пользователя',
    required: false,
    example: '1986-11-22'
  })
  @Optional()
  @IsISO8601(
    {},
    {
      message: AUTH_USER_DATE_BIRTH_NOT_VALID
  })
  public dataBirth?: string;
}
