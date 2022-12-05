import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Заголовок задачи',
    required: true,
    example: 'Новая задача'
  })
  title: string;

  @ApiProperty({
    description: 'Описание задачи',
    required: true,
    example: 'Это очень сложная задача, не стоит ее выполнять!'
  })
  description: string;

  @ApiProperty({
    description: 'Идентификатор категории',
    required: true,
    example: 1
  })
  categoryId: number;

  @ApiProperty({
    description: 'Бюджет за выполнение задачи',
    required: false,
    example: 500000000
  })
  budget?: number;

  @ApiProperty({
    description: 'Крайняя дата выполенения задачи',
    required: false,
    example: '2022-12-15 10:00:00'
  })
  deadline?: Date;

  @ApiProperty({
    description: 'Изображение задачи',
    required: false,
    example: 'test.jpg'
  })
  preview?: string;

  @ApiProperty({
    description: 'Адрес выполнения задачи',
    required: false,
    example: 'Новый город'
  })
  address?: string;

  @ApiProperty({
    description: 'Идентификатор постановщика задачи',
    required: true,
    example: '12'
  })
  customerId: string;

  @ApiProperty({
    description: 'Статус задачи',
    required: true,
    example: 2
  })
  statusId: number;
}
