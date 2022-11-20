import {UserRole} from '@taskforce/shared-types';
import {ApiProperty} from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    required: false,
    example: 'example@mail.com'
  })
  public email?: string;

  @ApiProperty({
    description: 'Имя пользователя',
    required: false,
    example: 'Андрей'
  })
  public firstname?: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    required: false,
    example: 'Иванов'
  })
  public lastname?: string;

  @ApiProperty({
    description: 'Город проживания пользователя',
    required: false,
    example: 'Астана'
  })
  public city?: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: false,
    example: '123456789'
  })
  public password?: string;

  @ApiProperty({
    description: 'Роль пользователя',
    required: false,
    example: UserRole.Performer
  })
  public role?: UserRole;

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
