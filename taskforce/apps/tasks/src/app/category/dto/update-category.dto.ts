import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Название категории',
    required: true,
    example: 'Учеба'
  })
  @IsString()
  public title: string;
}
