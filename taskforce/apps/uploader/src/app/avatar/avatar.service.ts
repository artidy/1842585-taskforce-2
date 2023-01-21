import { Injectable } from '@nestjs/common';
import { File } from '@taskforce/shared-types';
import * as fs from 'fs';

import { AvatarRepository } from './avatar.repository';
import { AvatarSettings, AvatarErrorMessages } from '../app.constant';
import { AvatarEntity } from './avatar.entity';
import { getFullPathFile, getShortPathFile } from '../app.functions';

@Injectable()
export class AvatarService {
  constructor(
    private readonly avatarRepository: AvatarRepository
  ) {}

  public async add(userId: string, fileName: string): Promise<File> {
    const existAvatar = await this.avatarRepository.findByUserId(userId);

    if (existAvatar) {
      throw new Error(AvatarErrorMessages.Exist)
    }

    const avatar = new AvatarEntity({ id: '', userId, fileName });

    return this.avatarRepository.create(avatar);
  }

  public async delete(userId: string): Promise<void> {
    const existAvatar = await this.avatarRepository.findByUserId(userId);

    if (!existAvatar) {
      throw new Error(AvatarErrorMessages.IsNotExist);
    }

    await this.avatarRepository.destroy(userId);

    fs.unlinkSync(getFullPathFile(AvatarSettings.Directory, existAvatar.fileName));
  }

  public async change(userId: string, fileName: string) {
    const existAvatar = await this.avatarRepository.findByUserId(userId);

    if (!existAvatar) {
      throw new Error(AvatarErrorMessages.IsNotExist);
    }

    if (!fileName) {
      throw new Error(AvatarErrorMessages.IsNotLoaded);
    }

    const avatar = new AvatarEntity({ id: existAvatar.id, userId, fileName });

    return this.avatarRepository.update(userId, avatar);
  }

  public async getAvatarUrl(userId: string) {
    const avatar = await this.avatarRepository.findByUserId(userId);

    return getShortPathFile(AvatarSettings.Directory, avatar.fileName);
  }
}
