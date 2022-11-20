import {Task} from './task.interface';

export interface Comment {
  id: number;
  text: string;
  task: Task;
}
