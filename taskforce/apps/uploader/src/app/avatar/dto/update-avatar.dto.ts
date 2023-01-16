import { ApiProperty } from '@nestjs/swagger';

export class UpdateAvatarDto {
  @ApiProperty({
    description: 'Путь к аватарке пользователя',
    required: false,
  })
  public url?: string;
}
