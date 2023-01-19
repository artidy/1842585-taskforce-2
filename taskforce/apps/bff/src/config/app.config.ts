import { registerAs } from '@nestjs/config';

export const appConfig = (token: string, envServer: string, envPort: string) =>
  registerAs(token, () => ({
    server: process.env[envServer],
    port: process.env[envPort],
}));
