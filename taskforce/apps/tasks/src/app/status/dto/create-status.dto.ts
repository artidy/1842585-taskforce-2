import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty({
    description: 'Заголовок статуса',
    required: true,
    example: 'В работе'
  })
  public title: string;
}
