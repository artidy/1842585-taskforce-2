import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { fillObject } from '@taskforce/core';

import { AvatarService } from './avatar.service';
import { AvatarRdo } from './rdo/avatar.rdo';
import { getFilePipe } from '../app.functions';
import { AVATAR_DIRECTORY, AVATAR_FIELD_NAME, AVATAR_TYPES, MAX_AVATAR_SIZE } from '../app.constant';
import { getMulterConfig } from '../../config/multer.config';

@ApiTags(AVATAR_FIELD_NAME)
@Controller(AVATAR_FIELD_NAME)
export class AvatarController {
  constructor(
    private readonly avatarService: AvatarService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async index(@Param('id') id: string) {
    const url = await this.avatarService.getAvatarUrl(id);

    return fillObject(AvatarRdo, { url });
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/:id')
  @UseInterceptors(FileInterceptor(
    AVATAR_FIELD_NAME,
    getMulterConfig(AVATAR_DIRECTORY, MAX_AVATAR_SIZE)))
  public async create(
    @Param('id') id: string,
    @UploadedFile(getFilePipe(AVATAR_TYPES)) avatar: Express.Multer.File
  ) {
    const fileName = avatar.filename;
    await this.avatarService.add(id, fileName);
    const url = await this.avatarService.getAvatarUrl(id);

    return fillObject(AvatarRdo, { url });
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  @UseInterceptors(FileInterceptor(
    AVATAR_FIELD_NAME,
    getMulterConfig(AVATAR_DIRECTORY, MAX_AVATAR_SIZE)))
  public async update(
    @Param('id') id: string,
    @UploadedFile(getFilePipe(AVATAR_TYPES)) avatar: Express.Multer.File
  ) {
    const fileName = avatar.filename;
    await this.avatarService.change(id, fileName);
    const url = await this.avatarService.getAvatarUrl(id);

    return fillObject(AvatarRdo, { url });
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    return this.avatarService.delete(id);
  }
}
