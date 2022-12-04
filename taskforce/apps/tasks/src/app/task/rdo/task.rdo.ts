import { Expose } from 'class-transformer';

import { Candidate, Category, Comment, Status, Tag } from '@taskforce/shared-types';

export class TaskRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public category: Category;

  @Expose()
  public budget: number;

  @Expose()
  public deadline: Date;

  @Expose()
  public preview: string;

  @Expose()
  public address: string;

  @Expose()
  tags: Tag[];

  @Expose()
  public customerId: string;

  @Expose()
  public performerId: string;

  @Expose()
  public candidates: Candidate[];

  @Expose()
  public comments: Comment[];

  @Expose()
  public status: Status;

  @Expose()
  public createdAt: Date;
}
