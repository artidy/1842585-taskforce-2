import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';
import { SubscriberRepository } from './subscriber.repository';
import { SubscriberModel, SubscriberSchema } from './subscriber.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubscriberModel.name, schema: SubscriberSchema }
    ]),
  ],
  controllers: [SubscriberController],
  providers: [SubscriberService, SubscriberRepository]
})
export class SubscriberModule {}
