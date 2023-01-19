import {ApiProperty} from '@nestjs/swagger';
import {UserRole} from '@taskforce/shared-types';

export class CreateUserDto {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    required: true,
    example: 'example@mail.com'
  })
  public email: string;

  @ApiProperty({
    description: 'Имя пользователя',
    required: true,
    example: 'Андрей'
  })
  public firstname: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    required: true,
    example: 'Иванов'
  })
  public lastname: string;

  @ApiProperty({
    description: 'Город проживания пользователя',
    required: true,
    example: 'Астана'
  })
  public city: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: true,
    example: '123456789'
  })
  public password: string;

  @ApiProperty({
    description: 'Роль пользователя',
    required: true,
    example: UserRole.Performer
  })
  public role: UserRole;

  @ApiProperty({
    description: 'Аватар пользователя',
    required: false,
  })
  public avatar?: string;

  @ApiProperty({
    description: 'Дата рождения пользователя',
    required: false,
    example: '1986-11-22'
  })
  public dataBirth?: string;
}
