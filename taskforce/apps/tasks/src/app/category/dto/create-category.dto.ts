import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Название категории',
    required: true,
    example: 'Работа'
  })
  public title: string;
}
