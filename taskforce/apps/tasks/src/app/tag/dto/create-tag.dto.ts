import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: 'Имя тега',
    required: true,
    example: 'разработка'
  })
  @IsString()
  public title: string;
}
