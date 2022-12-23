import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { SUBSCRIBER_EMAIL_NOT_VALID } from '../../app.constant';

export class CreateSubscriberDto {
  @ApiProperty({
    description: 'Уникальный email подписчика',
    required: true,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: SUBSCRIBER_EMAIL_NOT_VALID
    })
  public email: string;

  @ApiProperty({
    description: 'Имя подписчика',
    required: true,
    example: 'Андрей'
  })
  @IsString()
  public firstname: string;
}
