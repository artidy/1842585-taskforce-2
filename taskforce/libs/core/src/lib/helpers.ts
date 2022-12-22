import {ClassConstructor, plainToInstance} from 'class-transformer';
import * as dayjs from 'dayjs';

function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, { excludeExtraneousValues: true });
}

function getMongoConnectionString({username, password, host, port, databaseName, authDatabase}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}

function fillEntity<D, T>(dto: D, entity: T, dateFields: string[] = []): void {
  const keys = Object.keys(dto);

  keys.forEach((field) => {
    entity[field] = dateFields.includes(field) ? dayjs(dto[field]).toDate() : dto[field];
  });
}

export {
  fillObject,
  getMongoConnectionString,
  fillEntity
}
