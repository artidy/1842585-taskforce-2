import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { SubscriberErrorMessages } from '../../app.constant';

export class CreateSubscriberDto {
  @ApiProperty({
    description: 'Уникальный email подписчика',
    required: true,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: SubscriberErrorMessages.EmailNotValid
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
