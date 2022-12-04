import { Expose } from 'class-transformer';

export class StatusRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;
}
