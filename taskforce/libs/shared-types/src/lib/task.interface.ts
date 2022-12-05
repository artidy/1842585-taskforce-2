import { Category } from './category.interface';
import { Tag } from './tag.interface';
import { Comment } from './comment.interface';
import { Candidate } from './candidate.interface';
import { Status } from './status.interface';

export interface Task {
  id?: number;
  title: string;
  description: string;
  category: Category;
  budget?: number;
  deadline?: Date;
  preview?: string;
  address?: string;
  tags?: Tag[];
  customerId: string;
  performerId?: string;
  candidates: Candidate[];
  comments: Comment[];
  status: Status;
  createdAt: Date;
}
