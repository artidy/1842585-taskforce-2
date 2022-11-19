export interface Task {
  title: string;
  description: string;
  category: string;
  price?: number;
  deadline?: Date;
  preview?: string;
  address?: string;
  tags?: [];
}
