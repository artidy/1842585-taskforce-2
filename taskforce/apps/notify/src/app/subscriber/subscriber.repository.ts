import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CRUDRepository } from '@taskforce/core';
import { SubscriberEntity } from './subscriber.entity';
import { Subscriber } from '@taskforce/shared-types';
import { SubscriberModel } from './subscriber.model';

@Injectable()
export class SubscriberRepository implements CRUDRepository<SubscriberEntity, string, Subscriber> {
  constructor(
    @InjectModel(SubscriberModel.name) private readonly subscriberModel: Model<SubscriberModel>
  ) {}

  public async create(subscriber: SubscriberEntity): Promise<Subscriber> {
    return (new this.subscriberModel(subscriber)).save();
  }

  public async destroy(id: string): Promise<void> {
    await this.subscriberModel.deleteOne({id});
  }

  public async findById(id: string): Promise<Subscriber | null> {
    return this.subscriberModel.findById(id);
  }

  public async update(id: string, item: SubscriberEntity): Promise<Subscriber> {
    return this.subscriberModel.findByIdAndUpdate(id, item.toObject(), { new: true }).exec();
  }
}
