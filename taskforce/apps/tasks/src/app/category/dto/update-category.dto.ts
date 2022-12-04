import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Название категории',
    required: true,
    example: 'Учеба'
  })
  public title: string;
}
