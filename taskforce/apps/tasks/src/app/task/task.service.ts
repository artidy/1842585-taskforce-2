import { Injectable } from '@nestjs/common';

import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from '@taskforce/shared-types';
import { TaskEntity } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CategoryRepository } from '../category/category.repository';
import { StatusRepository } from '../status/status.repository';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly statusRepository: StatusRepository
  ) {}

  public async create(dto: CreateTaskDto): Promise<Task> {
    const category = await this.categoryRepository.findById(dto.categoryId);
    const status = await this.statusRepository.findById(dto.statusId);

    return this.taskRepository.create(new TaskEntity({
      ...dto,
      deadline: new Date(dto.deadline),
      category,
      status,
      candidates: [],
      comments: [],
      createdAt: null
    }));
  }

  public async update(id: number, dto: UpdateTaskDto): Promise<Task | null> {
    const task = await this.taskRepository.findById(id);
    const category = await this.categoryRepository.findById(dto.categoryId || task.category.id);
    const status = await this.statusRepository.findById(dto.statusId || task.status.id);

    return this.taskRepository.update(id, new TaskEntity({
      ...dto,
      title: dto.title || task.title,
      deadline: dto.deadline ? new Date(dto.deadline) : task.deadline,
      description: dto.description || task.description,
      customerId: dto.customerId || task.customerId,
      category,
      status,
      candidates: task.candidates,
      comments: task.comments,
      createdAt: task.createdAt,
    }));
  }

  public async findById(id: number): Promise<Task | null> {
    return this.taskRepository.findById(id);
  }

  public async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  public async delete(id: number): Promise<void> {
    return this.taskRepository.destroy(id);
  }
}
