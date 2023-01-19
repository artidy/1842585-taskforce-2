import { Address } from 'nodemailer/lib/mailer';
import {
  ISendMailOptions
} from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface';

export interface MailAddress extends Address {
  name: string;
  address: string;
}

export interface Mail extends ISendMailOptions {
  to: Array<MailAddress>;
  from: MailAddress;
  subject: string;
  text?: string;
  html?: string;
}
