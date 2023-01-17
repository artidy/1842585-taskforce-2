import { Subscriber } from '@taskforce/shared-types';

export class SubscriberEntity implements Subscriber {
  email: string;
  firstname: string;
  id: string;

  constructor(subscriber: Subscriber) {
    this.fillEntity(subscriber);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(subscriber: Subscriber) {
    this.id = subscriber.id;
    this.email = subscriber.email;
    this.firstname = subscriber.firstname;
  }
}
