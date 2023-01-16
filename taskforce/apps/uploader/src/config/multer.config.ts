import { ConfigService, registerAs } from '@nestjs/config';
import { MulterModuleAsyncOptions } from '@nestjs/platform-express';

export const multerOptions = registerAs('file', () => ({
  destination: process.env.UPLOAD_DIRECTORY,
  maxFileSize: process.env.MAX_FILE_SIZE,
}));

export function getMulterConfig(): MulterModuleAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      dest: configService.get<string>('file.destination'),
      limits: {
        fileSize: configService.get<number>('file.maxFileSize'),
      }
    }),
    inject: [ConfigService]
  }
}
