import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { DEFAULT_SORT_TYPE, DEFAULT_TASK_COUNT_LIMIT, SortTypes } from '../../app.constant';

export class TaskQuery {
  @Transform(({ value }) => +value || DEFAULT_TASK_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_TASK_COUNT_LIMIT;

  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  public category?: number;

  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  public tag?: number;

  @Transform(({ value }) => value)
  @IsString()
  @IsOptional()
  public address?: string;

  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  public status?: number;

  @Transform(({ value }) => value || DEFAULT_SORT_TYPE)
  @IsEnum(SortTypes)
  @IsOptional()
  public sortType = DEFAULT_SORT_TYPE;

  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  public page: number;
}
