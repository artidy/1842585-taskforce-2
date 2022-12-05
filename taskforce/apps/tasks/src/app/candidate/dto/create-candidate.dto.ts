import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    required: true,
    example: '11'
  })
  public userId: string;

  @ApiProperty({
    description: 'Идентификатор задания',
    required: true,
    example: 1
  })
  public taskId: number;
}
