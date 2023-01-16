import { File } from '@taskforce/shared-types';

export class AvatarEntity implements File {
  id: string;
  userId: string;
  url: string;

  constructor(avatar: File) {
    this.fillEntity(avatar);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(avatar: File) {
    this.id = avatar.id;
    this.userId = avatar.userId;
    this.url = avatar.url;
  }
}
