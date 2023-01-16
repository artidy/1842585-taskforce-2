import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class UploadAvatarDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    required: true,
    example: '507f191e810c19729de860ea'
  })
  @IsMongoId()
  public userId: string;

  @ApiProperty({
    description: 'Путь к аватарке пользователя',
    required: true,
  })
  public url: string;
}
