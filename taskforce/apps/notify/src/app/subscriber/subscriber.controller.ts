import { Controller } from '@nestjs/common';

import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { fillObject } from '@taskforce/core';
import { SubscriberRdo } from './rdo/subscriber.rdo';
import { EventPattern } from '@nestjs/microservices';
import { CommandEvent } from '@taskforce/shared-types';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

@Controller()
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @EventPattern({ cmd: CommandEvent.GetAllSubscribers })
  public async getAll() {
    const subscribers = await this.subscriberService.findAll();

    return fillObject(SubscriberRdo, subscribers);
  }

  @EventPattern({ cmd: CommandEvent.AddSubscriber })
  public async add(newSubscriber: CreateSubscriberDto) {
    const subscriber = await this.subscriberService.add(newSubscriber);

    return fillObject(SubscriberRdo, subscriber);
  }

  @EventPattern({ cmd: CommandEvent.GetSubscriberById })
  public async getById(id: string) {
    const subscriber = await this.subscriberService.findById(id);

    return fillObject(SubscriberRdo, subscriber);
  }

  @EventPattern({ cmd: CommandEvent.DeleteSubscriber })
  public async delete(id: string) {
    return await this.subscriberService.delete(id);
  }

  @EventPattern({ cmd: CommandEvent.UpdateSubscriber })
  public async update(id: string, subscriber: UpdateSubscriberDto) {
    const updatedSubscriber = await this.subscriberService.update(id, subscriber);

    return fillObject(SubscriberRdo, updatedSubscriber);
  }
}
