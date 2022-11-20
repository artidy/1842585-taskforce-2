import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import {User} from '@taskforce/shared-types';

import {CreateUserDto} from './dto/create-user.dto';
import {AuthUserMemoryRepository} from './auth-user-memory.repository';
import {AuthUserEntity} from './auth-user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserRepository: AuthUserMemoryRepository
  ) {}

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
}
