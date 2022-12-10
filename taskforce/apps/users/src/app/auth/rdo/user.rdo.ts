import {Expose, Transform} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

import { UserRole } from '@taskforce/shared-types';

export class UserRdo {
  @ApiProperty({
    description: 'Уникальный идентификатор пользоателя',
    example: '1'
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'Аватар пользователя',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'Город проживания пользователя',
    required: true,
    example: 'Астана'
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'Роль пользователя',
    required: true,
    example: UserRole.Performer
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: 'Дата рождения пользователя (ISO format)',
    example: '1981-03-12'
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: 'E-mail пользователя',
    example: 'user@email.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Андрей'
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    example: 'Шматко'
  })
  @Expose()
  public lastname: string;
}
