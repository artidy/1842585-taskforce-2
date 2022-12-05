import { Expose } from 'class-transformer';

export class CandidateRdo {
  @Expose()
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public taskId: string;
}
