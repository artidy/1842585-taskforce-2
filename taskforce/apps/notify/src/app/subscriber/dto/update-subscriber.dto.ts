import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { SUBSCRIBER_EMAIL_NOT_VALID } from '../../app.constant';

export class UpdateSubscriberDto {
  @ApiProperty({
    description: 'Уникальный email подписчика',
    required: false,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: SUBSCRIBER_EMAIL_NOT_VALID
    })
  public email?: string;

  @ApiProperty({
    description: 'Имя подписчика',
    required: false,
    example: 'Андрей'
  })
  @IsString()
  public firstname?: string;
}
