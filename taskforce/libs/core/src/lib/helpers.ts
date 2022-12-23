import {ClassConstructor, plainToInstance} from 'class-transformer';
import * as dayjs from 'dayjs';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

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

function getRabbitmqConfig(configService: ConfigService): RmqOptions {
  const user = configService.get<string>('rmq.user');
  const password = configService.get<string>('rmq.password');
  const host = configService.get<string>('rmq.host');
  const queue = configService.get<string>('rmq.queue');
  const url = `amqp://${user}:${password}@${host}`;

  return {
    transport: Transport.RMQ,
    options: {
      urls: [url],
      queue,
      persistent: true,
      noAck: true,
      queueOptions: {
        durable: true,
      }
    }
  }
}

export {
  fillObject,
  getMongoConnectionString,
  fillEntity,
  getRabbitmqConfig
}
