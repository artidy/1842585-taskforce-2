import {Category} from './category.interface';
import {Tag} from './tag.interface';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: Category;
  price?: number;
  deadline?: Date;
  preview?: string;
  address?: string;
  tags?: Tag[];
}
