import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Название категории',
    required: true,
    example: 'Работа'
  })
  @IsString()
  public title: string;
}
