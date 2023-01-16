import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { File } from '@taskforce/shared-types';

@Schema({
  collection: 'avatars',
  timestamps: true
})
class AvatarModel extends Document implements File {
  @Prop()
  public id: string;

  @Prop()
  public userId: string;

  @Prop()
  public url: string;
}

const AvatarSchema = SchemaFactory.createForClass(AvatarModel);

export {
  AvatarModel,
  AvatarSchema
}
