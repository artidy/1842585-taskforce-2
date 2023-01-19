import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const usersConfig = appConfig(
  Microservices.Users,
  process.env.USERS_SERVER,
  process.env.USERS_SERVER_PORT
);
