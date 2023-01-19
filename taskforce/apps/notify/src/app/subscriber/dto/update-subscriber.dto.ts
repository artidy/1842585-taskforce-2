import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { SubscriberErrorMessages } from '../../app.constant';

export class UpdateSubscriberDto {
  @ApiProperty({
    description: 'Уникальный email подписчика',
    required: false,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: SubscriberErrorMessages.EmailNotValid
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
