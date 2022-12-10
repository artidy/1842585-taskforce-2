import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query
} from '@nestjs/common';

import { CandidateService } from './candidate.service';
import { fillObject } from '@taskforce/core';
import { CandidateRdo } from './rdo/candidate.rdo';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('candidates')
@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index(@Query('userId') userId: string) {
    const candidates = await this.candidateService.findByUserId(userId);

    return fillObject(CandidateRdo, candidates);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id', ParseIntPipe) id: number) {
    const candidate = await this.candidateService.findById(id);

    return fillObject(CandidateRdo, candidate);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateCandidateDto) {
    const candidate = await this.candidateService.create(dto);

    return fillObject(CandidateRdo, candidate);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    await this.candidateService.delete(id);
  }
}
