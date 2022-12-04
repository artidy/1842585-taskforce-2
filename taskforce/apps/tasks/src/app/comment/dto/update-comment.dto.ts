import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    required: true,
    example: '11'
  })
  userId: string;

  @ApiProperty({
    description: 'Идентификатор задания',
    required: true,
    example: 1
  })
  taskId: number;

  @ApiProperty({
    description: 'Текст комментария',
    required: true,
    example: 'Это тестовый комментарий'
  })
  text: string;
}
