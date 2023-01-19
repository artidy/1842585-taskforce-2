import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

import { CommandEvent, InitialUser, User, UserRole } from '@taskforce/shared-types';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUserEntity } from './auth-user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthUserRepository } from './auth-user-repository';
import { createEvent, databaseConfig, fillEntity } from '@taskforce/core';
import { RABBITMQ_SERVICE_NAME } from '../app.constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserRepository: AuthUserRepository,
    private readonly jwtService: JwtService,
    @Inject(databaseConfig.KEY)
    private readonly mongoConfig: ConfigType<typeof databaseConfig>,
    @Inject(RABBITMQ_SERVICE_NAME) private readonly rabbitClient: ClientProxy
  ) {}

  public async checkUser(dto: LoginUserDto) {
    const existUser: User = await this.authUserRepository.findByEmail(dto.email);

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

    const createdUser = await this.authUserRepository.create(userEntity);

    if (createdUser.role === UserRole.Performer) {
      this.rabbitClient.emit(
        createEvent(CommandEvent.AddSubscriber),
        {
          id: createdUser._id,
          firstname: createdUser.firstname,
          email: createdUser.email
        }
      )
    }

    return createdUser;
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

  public async getUserById(id: string) {
    return this.authUserRepository.findById(id);
  }
}
