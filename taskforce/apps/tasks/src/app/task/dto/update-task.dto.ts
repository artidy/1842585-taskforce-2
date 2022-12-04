export class UpdateTaskDto {
  title?: string;
  description?: string;
  categoryId?: number;
  budget?: number;
  deadline?: Date;
  preview?: string;
  address?: string;
  customerId?: string;
  statusId?: number;
}
