import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    required: true,
    example: '11'
  })
  @IsString()
  public userId: string;

  @ApiProperty({
    description: 'Идентификатор задания',
    required: true,
    example: 1
  })
  @IsNumber()
  public taskId: number;
}
