import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const uploaderConfig = appConfig(
  Microservices.Uploader,
  process.env.UPLOADER_SERVER,
  process.env.UPLOADER_SERVER_PORT
);
