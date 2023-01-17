import { Injectable } from '@nestjs/common';
import { File } from '@taskforce/shared-types';
import * as fs from 'fs';

import { AvatarRepository } from './avatar.repository';
import { AVATAR_DIRECTORY, AVATAR_EXIST, AVATAR_IS_NOT_EXIST, FILE_IS_NOT_LOADED } from '../app.constant';
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
      throw new Error(AVATAR_EXIST)
    }

    const avatar = new AvatarEntity({ id: '', userId, fileName });

    return this.avatarRepository.create(avatar);
  }

  public async delete(userId: string): Promise<void> {
    const existAvatar = await this.avatarRepository.findByUserId(userId);

    if (!existAvatar) {
      throw new Error(AVATAR_IS_NOT_EXIST);
    }

    await this.avatarRepository.destroy(userId);

    fs.unlinkSync(getFullPathFile(AVATAR_DIRECTORY, existAvatar.fileName));
  }

  public async change(userId: string, fileName: string) {
    const existAvatar = await this.avatarRepository.findByUserId(userId);

    if (!existAvatar) {
      throw new Error(AVATAR_IS_NOT_EXIST);
    }

    if (!fileName) {
      throw new Error(FILE_IS_NOT_LOADED);
    }

    const avatar = new AvatarEntity({ id: existAvatar.id, userId, fileName });

    return this.avatarRepository.update(userId, avatar);
  }

  public async getByUserId(userId: string) {
    return this.avatarRepository.findByUserId(userId);
  }

  public async getAvatarUrl(userId: string) {
    const avatar = await this.avatarRepository.findByUserId(userId);

    return getShortPathFile(AVATAR_DIRECTORY, avatar.fileName);
  }
}
