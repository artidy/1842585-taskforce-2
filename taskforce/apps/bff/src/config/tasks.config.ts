import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const tasksConfig = appConfig(
  Microservices.Tasks,
  process.env.TASKS_SERVER,
  process.env.TASKS_SERVER_PORT
);
