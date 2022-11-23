import {CRUDRepository} from '@taskforce/core';
import {Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import {User} from '@taskforce/shared-types';

import {AuthUserEntity} from './auth-user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AuthUserModel } from './auth-user.model';

@Injectable()
export class AuthUserRepository implements CRUDRepository<AuthUserEntity, string, User> {
  constructor(
    @InjectModel(AuthUserModel.name) private readonly authUserModel: Model<AuthUserModel>
  ) {}

  public async create(item: AuthUserEntity): Promise<User> {
    return (new this.authUserModel(item)).save();
  }

  public async destroy(id: any): Promise<void> {
    this.authUserModel.deleteOne(id);
  }

  public async findByEmail(email: string): Promise<User|null> {
    return this.authUserModel.findOne({email}).exec();
  }

  public async findById(id: string): Promise<User|null> {
    return this.authUserModel.findById(id).exec();
  }

  public async update(id: string, item: AuthUserEntity): Promise<User> {
    return this.authUserModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
