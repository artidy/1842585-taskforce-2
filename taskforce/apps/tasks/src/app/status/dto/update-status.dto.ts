import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({
    description: 'Заголовок статуса',
    required: true,
    example: 'Новый'
  })
  @IsString()
  public title: string;
}
