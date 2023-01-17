import { File } from '@taskforce/shared-types';

export class AvatarEntity implements File {
  id: string;
  userId: string;
  fileName: string;

  constructor(avatar: File) {
    this.fillEntity(avatar);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(avatar: File) {
    this.id = avatar.id;
    this.userId = avatar.userId;
    this.fileName = avatar.fileName;
  }
}
