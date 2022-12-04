import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

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
  public async show(@Param('id') id: string) {
    const candidateId = parseInt(id, 10);
    const candidate = await this.candidateService.findById(candidateId);

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
  public async delete(@Param('id') id: string) {
    const candidateId = parseInt(id, 10);

    await this.candidateService.delete(candidateId);
  }
}
