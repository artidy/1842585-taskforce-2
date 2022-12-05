import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiProperty({
    description: 'Имя тега',
    required: true,
    example: 'дизайн'
  })
  public title: string;
}
