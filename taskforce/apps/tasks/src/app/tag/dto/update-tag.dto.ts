import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTagDto {
  @ApiProperty({
    description: 'Имя тега',
    required: true,
    example: 'дизайн'
  })
  @IsString()
  public title: string;
}
