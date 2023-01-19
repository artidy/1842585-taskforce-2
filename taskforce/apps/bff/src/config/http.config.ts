import { ConfigService, registerAs } from '@nestjs/config';
import { HttpModuleAsyncOptions } from '@nestjs/axios';

export const httpOptions = registerAs('http', () => ({
  timeout: process.env.HTTP_TIMEOUT,
  maxRedirects: process.env.HTTP_MAX_REDIRECTS
}));

export function getHttpConfig(): HttpModuleAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      timeout: configService.get('HTTP_TIMEOUT'),
      maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
    }),
    inject: [ConfigService]
  }
}
