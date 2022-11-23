import { Inject, Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { ConfigService, ConfigType } from '@nestjs/config';
import {User} from '@taskforce/shared-types';

import {CreateUserDto} from './dto/create-user.dto';
import {AuthUserMemoryRepository} from './auth-user-memory.repository';
import {AuthUserEntity} from './auth-user.entity';
import {UpdateUserDto} from './dto/update-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import databaseConfig from '../../config/database.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserRepository: AuthUserMemoryRepository,
    @Inject(databaseConfig.KEY)
    private readonly mongoConfig: ConfigType<typeof databaseConfig>
  ) {
    console.log(mongoConfig.authBase);
  }

  public async login(dto: LoginUserDto) {
    const existUser: User = await this.authUserRepository.findByEmail(dto.email);

    if (!existUser) {
      throw new Error('Пользователя не существует');
    }

    const userEntity = new AuthUserEntity(existUser);

    return userEntity.comparePassword(dto.password);
  }

  public async register(dto: CreateUserDto) {
    const {email, firstname, lastname, city, role, password, dataBirth, avatar} = dto;
    const user: User = {
      _id: '',
      email,
      firstname,
      lastname,
      city,
      role,
      passwordHash: password,
      dataBirth: dayjs(dataBirth).toDate(),
      avatar,
    }

    const existUser = await this.authUserRepository.findByEmail(email);

    if (existUser) {
      throw new Error('Пользователь уже существует');
    }

    const userEntity = new AuthUserEntity(user);
    await userEntity.setPassword(password);

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

    const keys = Object.keys(dto);
    keys.forEach((field) => {
      user[field] = field === 'dataBirth' ? dayjs(dto[field]).toDate() : dto[field];
    });

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
