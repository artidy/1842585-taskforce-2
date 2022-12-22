import { Injectable } from '@nestjs/common';

import { SubscriberRepository } from './subscriber.repository';
import { SubscriberEntity } from './subscriber.entity';
import { Subscriber } from '@taskforce/shared-types';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { SUBSCRIBER_EXIST, SUBSCRIBER_NOT_EXIST } from '../app.const';
import { fillEntity } from '@taskforce/core';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

@Injectable()
export class SubscriberService {
  constructor(
    private readonly subscriberRepository: SubscriberRepository
  ) {}

  public async findAll(): Promise<Subscriber[]> {
    return this.subscriberRepository.findAll();
  }

  public async add(dto: CreateSubscriberDto): Promise<Subscriber> {
    const existSubscriber = await this.subscriberRepository.findByEmail(dto.email);

    if (existSubscriber) {
      throw new Error(SUBSCRIBER_EXIST);
    }

    const subscriber = new SubscriberEntity({ ...dto, id: '' });

    return this.subscriberRepository.create(subscriber);
  }

  public async delete(id: string): Promise<void> {
    await this.subscriberRepository.destroy(id);
  }

  public async findById(id: string): Promise<Subscriber | null> {
    return this.subscriberRepository.findById(id);
  }

  public async update(id: string, dto: UpdateSubscriberDto): Promise<Subscriber> {
    const existSubscriber: Subscriber = await this.subscriberRepository.findById(id);

    if (!existSubscriber) {
      throw new Error(SUBSCRIBER_NOT_EXIST);
    }

    fillEntity<UpdateSubscriberDto, Subscriber>(dto, existSubscriber);

    const subscriberEntity = new SubscriberEntity(existSubscriber);

    return this.subscriberRepository.update(id, subscriberEntity);
  }
}
