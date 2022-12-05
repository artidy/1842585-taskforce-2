import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusDto {
  @ApiProperty({
    description: 'Заголовок статуса',
    required: true,
    example: 'Новый'
  })
  public title: string;
}
