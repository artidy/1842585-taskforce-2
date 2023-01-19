import { appConfig } from './app.config';
import { Microservices } from '../app/app.constant';

export const tasksConfig = appConfig(
  Microservices.Tasks,
  'TASKS_SERVER',
  'TASKS_SERVER_PORT'
);
