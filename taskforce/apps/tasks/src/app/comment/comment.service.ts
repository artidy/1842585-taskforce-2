import { Injectable } from '@nestjs/common';

import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from '@taskforce/shared-types';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  public async create(dto: CreateCommentDto): Promise<Comment> {
    return this.commentRepository.create(new CommentEntity({...dto, createdAt: null}));
  }

  public async update(id: number, dto: UpdateCommentDto): Promise<Comment | null> {
    return this.commentRepository.update(id, new CommentEntity({...dto, createdAt: null}));
  }

  public async findById(id: number): Promise<Comment | null> {
    return this.commentRepository.findById(id);
  }

  public async findByUserId(userId: string): Promise<Comment[]> {
    return this.commentRepository.findByUserId(userId);
  }

  public async delete(id: number): Promise<void> {
    return this.commentRepository.destroy(id);
  }
}
