import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Subscriber } from '@taskforce/shared-types';

@Schema({
  collection: 'subscribers',
  timestamps: true,
})
class SubscriberModel extends Document implements Subscriber {
  @Prop()
  public id: string;

  @Prop()
  public email: string;

  @Prop()
  firstname: string;
}

const SubscriberSchema = SchemaFactory.createForClass(SubscriberModel);

export {
  SubscriberModel,
  SubscriberSchema,
}
