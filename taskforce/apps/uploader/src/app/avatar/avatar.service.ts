import { Injectable } from '@nestjs/common';
import { File } from '@taskforce/shared-types';

import { AvatarRepository } from './avatar.repository';
import { UploadAvatarDto } from './dto/upload-avatar.dto';
import { AVATAR_EXIST, AVATAR_IS_NOT_EXIST, FILE_IS_NOT_LOADED } from '../app.constant';
import { AvatarEntity } from './avatar.entity';
import { UpdateAvatarDto } from './dto/update-avatar.dto';

@Injectable()
export class AvatarService {
  constructor(
    private readonly avatarRepository: AvatarRepository
  ) {}

  public async add(dto: UploadAvatarDto): Promise<File> {
    const existAvatar = await this.avatarRepository.findByUserId(dto.userId);

    if (existAvatar) {
      throw new Error(AVATAR_EXIST)
    }

    const avatar = new AvatarEntity({ ...dto, id: '' });

    return this.avatarRepository.create(avatar);
  }

  public async delete(id: string): Promise<void> {
    return this.avatarRepository.destroy(id);
  }

  public async change(id: string, dto: UpdateAvatarDto) {
    const existAvatar = await this.avatarRepository.findById(id);
    const url = dto.url;

    if (!existAvatar) {
      throw new Error(AVATAR_IS_NOT_EXIST);
    }

    if (!url) {
      throw new Error(FILE_IS_NOT_LOADED);
    }

    const avatar = new AvatarEntity({ id: existAvatar.id, userId: id, url });

    return this.avatarRepository.update(id, avatar);
  }

  public async getByUserId(id: string) {
    return this.avatarRepository.findByUserId(id);
  }
}
