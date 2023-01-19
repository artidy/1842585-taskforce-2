import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const notifyConfig = appConfig(
  Microservices.Notify,
  'NOTIFY_SERVER',
  'NOTIFY_SERVER_PORT'
);
