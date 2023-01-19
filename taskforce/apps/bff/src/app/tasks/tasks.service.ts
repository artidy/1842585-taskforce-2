import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TasksService {
  private readonly serviceAddress: string;
  private readonly servicePath: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly tasksConfig: ConfigService
  ) {
    this.serviceAddress = `${this.tasksConfig.get<string>('tasks.server')}:${
      this.tasksConfig.get<number>('tasks.port')}`;
    this.servicePath = 'api/tasks';
  }

  public async create(task) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${this.servicePath}`,
        task
      )
    )

    return data;
  }

  public async update(id, task) {
    const { data } = await firstValueFrom(
      this.httpService.patch(
        `${this.serviceAddress}/${this.servicePath}/${id}`,
        task
      )
    )

    return data;
  }

  public async getById(id) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.serviceAddress}/${this.servicePath}/${id}`)
    )

    return data;
  }

  public async getAll(query) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.serviceAddress}/${this.servicePath}`,
        { params: query }
      )
    )

    return data;
  }

  public async delete(id: number) {
    return firstValueFrom(
      this.httpService.delete(`${this.serviceAddress}/${this.servicePath}/${id}`)
    )
  }
}
