import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

import { CommentService } from './comment.service';
import { fillObject } from '@taskforce/core';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/')
  public async getUserComments(@Query('userId') userId: string) {
    const comments = await this.commentService.findByUserId(userId);

    return fillObject(CommentRdo, comments);
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    const comment = await this.commentService.findById(commentId);

    return fillObject(CommentRdo, comment);
  }

  @Post('/')
  public async create(@Body() dto: CreateCommentDto) {
    const comment = await this.commentService.create(dto);

    return fillObject(CommentRdo, comment);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
    const commentId = parseInt(id, 10);
    const comment = await this.commentService.update(commentId, dto);

    return fillObject(CommentRdo, comment);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    const commentId = parseInt(id, 10);

    await this.commentService.delete(commentId);
  }
}
