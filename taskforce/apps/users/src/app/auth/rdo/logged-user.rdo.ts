import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'Уникальный идентификатор пользоателя',
    example: '1'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'E-mail пользователя',
    example: 'user@email.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Токен доступа',
    example: ''
  })
  @Expose()
  public accessToken: string;
}
