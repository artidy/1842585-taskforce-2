import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    required: true,
    example: '11'
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Идентификатор задания',
    required: true,
    example: 1
  })
  @IsNumber()
  taskId: number;

  @ApiProperty({
    description: 'Текст комментария',
    required: true,
    example: 'Это тестовый комментарий'
  })
  @IsString()
  text: string;
}
