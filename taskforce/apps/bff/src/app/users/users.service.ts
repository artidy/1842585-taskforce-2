import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly usersConfig: ConfigService
  ) {
    this.serviceAddress = `${this.usersConfig.get<string>('users.server')}:${
      this.usersConfig.get<number>('users.port')}`;
  }

  public async register(user) {
    const registerPath = 'api/auth/register';

    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${registerPath}`,
        user
      )
    )

    return data;
  }

  public async login(user) {
    const loginPath = 'api/auth/login';

    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${loginPath}`,
        user
      )
    )

    return data;
  }

  public async getUserById(id: string) {
    const userPath = 'api/auth';

    const { data } = await firstValueFrom(
      this.httpService.get(`${this.serviceAddress}/${userPath}/${id}`)
    )

    return data;
  }
}
