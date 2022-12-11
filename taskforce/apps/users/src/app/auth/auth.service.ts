import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { InitialUser, User } from '@taskforce/shared-types';

import {CreateUserDto} from './dto/create-user.dto';
import {AuthUserEntity} from './auth-user.entity';
import {UpdateUserDto} from './dto/update-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import databaseConfig from '../../config/database.config';
import { AuthUserRepository } from './auth-user-repository';
import { fillEntity } from '@taskforce/core';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserRepository: AuthUserRepository,
    private readonly jwtService: JwtService,
    @Inject(databaseConfig.KEY)
    private readonly mongoConfig: ConfigType<typeof databaseConfig>
  ) {}

  public async checkUser(dto: LoginUserDto) {
    const existUser: User = await this.authUserRepository.findByEmail(dto.email);
    console.log(existUser, dto.email);

    if (!existUser) {
      throw new UnauthorizedException('Пользователя не существует');
    }

    const userEntity = new AuthUserEntity(existUser);

    if (! await userEntity.comparePassword(dto.password)) {
      throw new UnauthorizedException('Неверный пароль пользователя');
    }

    return userEntity.toObject();
  }

  public async login(user: User) {
    const payload = {
      sub: user._id,
      email: user.email,
      role: user.role,
      lastname: user.lastname,
      firstname: user.firstname,
    }

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
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
