import { registerAs } from '@nestjs/config';

export const appConfig = (token: string, envServer: string, envPort: string) =>
  registerAs(token, () => ({
    server: envServer,
    port: envPort,
}));
