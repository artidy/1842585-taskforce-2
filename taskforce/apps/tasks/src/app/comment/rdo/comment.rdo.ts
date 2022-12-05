import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public taskId: string;

  @Expose()
  public text: string;

  @Expose()
  public createdAt: string;

  @Expose()
  public updatedAt: string;
}
