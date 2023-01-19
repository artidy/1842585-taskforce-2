import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const uploaderConfig = appConfig(
  Microservices.Uploader,
  'UPLOADER_SERVER',
  'UPLOADER_SERVER_PORT'
);
