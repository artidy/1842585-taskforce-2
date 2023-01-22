import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { fillObject } from '@taskforce/core';
import { CommandEvent } from '@taskforce/shared-types';

import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { SubscriberRdo } from './rdo/subscriber.rdo';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { MailService } from '../mail/mail.service';

@Controller()
export class SubscriberController {
  constructor(
    private readonly subscriberService: SubscriberService,
    private readonly mailService: MailService
  ) {}

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
    await this.mailService.sendNotifyNewSubscriber(subscriber);

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
