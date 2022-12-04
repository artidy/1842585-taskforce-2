import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    description: 'Имя тега',
    required: true,
    example: 'разработка'
  })
  public title: string;
}
