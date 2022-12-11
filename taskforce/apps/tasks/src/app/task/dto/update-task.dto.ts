import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsNumber, IsOptional, IsString } from 'class-validator';
import { DATE_DEADLINE_NOT_VALID } from '../../app.constant';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Заголовок задачи',
    required: false,
    example: 'Новая задача'
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Описание задачи',
    required: false,
    example: 'Это очень сложная задача, не стоит ее выполнять!'
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Идентификатор категории',
    required: false,
    example: 1
  })
  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @ApiProperty({
    description: 'Бюджет за выполнение задачи',
    required: false,
    example: 500000000
  })
  @IsOptional()
  @IsNumber()
  budget?: number;

  @ApiProperty({
    description: 'Крайняя дата выполенения задачи',
    required: false,
    example: '2022-12-15 10:00:00'
  })
  @IsOptional()
  @IsISO8601({}, {
    message: DATE_DEADLINE_NOT_VALID
  })
  deadline?: Date;

  @ApiProperty({
    description: 'Изображение задачи',
    required: false,
    example: 'test.jpg'
  })
  @IsOptional()
  @IsString()
  preview?: string;

  @ApiProperty({
    description: 'Адрес выполнения задачи',
    required: false,
    example: 'Новый город'
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'Идентификатор постановщика задачи',
    required: false,
    example: '12'
  })
  @IsOptional()
  @IsString()
  customerId?: string;

  @ApiProperty({
    description: 'Идентификатор исполнителя задачи',
    required: false,
    example: '12'
  })
  @IsOptional()
  @IsString()
  performerId?: string;

  @ApiProperty({
    description: 'Статус задачи',
    required: false,
    example: 2
  })
  @IsOptional()
  @IsNumber()
  statusId?: number;
}
