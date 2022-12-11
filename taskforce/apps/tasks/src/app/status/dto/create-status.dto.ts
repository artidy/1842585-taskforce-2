import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({
    description: 'Заголовок статуса',
    required: true,
    example: 'В работе'
  })
  @IsString()
  public title: string;
}
