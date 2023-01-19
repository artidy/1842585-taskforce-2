import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const notifyConfig = appConfig(
  Microservices.Notify,
  process.env.NOTIFY_SERVER,
  process.env.NOTIFY_SERVER_PORT
);
