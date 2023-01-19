import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const usersConfig = appConfig(
  Microservices.Users,
  'USERS_SERVER',
  'USERS_SERVER_PORT'
);
