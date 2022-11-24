import { Inject, Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { ConfigType } from '@nestjs/config';
import { InitialUser, User } from '@taskforce/shared-types';

import {CreateUserDto} from './dto/create-user.dto';
import {AuthUserEntity} from './auth-user.entity';
import {UpdateUserDto} from './dto/update-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import databaseConfig from '../../config/database.config';
import { AuthUserRepository } from './auth-user-repository';
import { fillEntity, fillObject } from '@taskforce/core';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserRepository: AuthUserRepository,
    @Inject(databaseConfig.KEY)
    private readonly mongoConfig: ConfigType<typeof databaseConfig>
  ) {}

  public async login(dto: LoginUserDto) {
    const existUser: User = await this.authUserRepository.findByEmail(dto.email);
    console.log(existUser, dto.email);

    if (!existUser) {
      throw new Error('Пользователя не существует');
    }

    const userEntity = new AuthUserEntity(existUser);

    return userEntity.comparePassword(dto.password);
  }

  public async register(dto: CreateUserDto) {
    const existUser = await this.authUserRepository.findByEmail(dto.email);

    if (existUser) {
      throw new Error('Пользователь уже существует');
    }

    const user: User = new InitialUser();
    fillEntity<CreateUserDto, User>(dto, user, ['dataBirth']);

    const userEntity = new AuthUserEntity(user);
    await userEntity.setPassword(dto.password);

    return this.authUserRepository.create(userEntity);
  }

  public async update(id: string, dto: UpdateUserDto) {
    const existUser: User = await this.authUserRepository.findById(id);

    if (!existUser) {
      throw new Error('Пользователя не существует');
    }

    const user: User = {
      ...existUser,
    }

    fillEntity<UpdateUserDto, User>(dto, user, ['dataBirth']);

    const userEntity = new AuthUserEntity(user);

    if (dto.password) {
      await userEntity.setPassword(dto.password);
    }

    return this.authUserRepository.update(id, userEntity);
  }

  public async delete(id: string) {
    return this.authUserRepository.destroy(id);
  }
}
