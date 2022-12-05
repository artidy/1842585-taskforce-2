import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

import { CommentService } from './comment.service';
import { fillObject } from '@taskforce/core';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async getUserComments(@Query('userId') userId: string) {
    const comments = await this.commentService.findByUserId(userId);

    return fillObject(CommentRdo, comments);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    const comment = await this.commentService.findById(commentId);

    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateCommentDto) {
    const comment = await this.commentService.create(dto);

    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
    const commentId = parseInt(id, 10);
    const comment = await this.commentService.update(commentId, dto);

    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const commentId = parseInt(id, 10);

    await this.commentService.delete(commentId);
  }
}
