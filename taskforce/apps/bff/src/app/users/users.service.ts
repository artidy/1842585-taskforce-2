import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { DATA_PATH } from '../app.constant';

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

  public async register(dto: CreateUserDto) {
    const registerPath = 'api/auth/register';

    const { data } = await firstValueFrom(
      this.httpService.post<UserRdo>(
        `${this.serviceAddress}/${registerPath}`,
        dto
      )
    )

    return data;
  }

  public async login(user: LoginUserDto) {
    const loginPath = 'api/auth/login';

    const { data } = await firstValueFrom(
      this.httpService.post<LoggedUserRdo>(
        `${this.serviceAddress}/${loginPath}`,
        user
      )
    )

    return data;
  }

  public async getUserById(id: string) {
    const userPath = 'api/auth';

    const { data } = await firstValueFrom(
      this.httpService.get<UserRdo>(`${this.serviceAddress}/${userPath}/${id}`)
    )

    return data;
  }
}
