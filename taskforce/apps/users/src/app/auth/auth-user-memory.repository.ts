import {CRUDRepository} from '@taskforce/core';
import {Injectable} from '@nestjs/common';
import {User} from '@taskforce/shared-types';
import * as crypto from 'crypto';

import {AuthUserEntity} from './auth-user.entity';

@Injectable()
export class AuthUserMemoryRepository implements CRUDRepository<AuthUserEntity, string, User> {
  private repository: {[key: string]: User} = {};

  public async create(item: AuthUserEntity): Promise<User> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };

    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async destroy(id: any): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<User|null> {
    const user = this.repository[id];

    return user ? { ...user } : null;
  }

  public async update(id: string, item: AuthUserEntity): Promise<User> {
    this.repository[id] = { ...item.toObject(), _id: id};

    return this.findById(id);
  }
}
