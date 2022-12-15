import { Injectable } from '@nestjs/common';
import { SentMessageInfo } from 'nodemailer';
import { MailerService } from '@nestjs-modules/mailer';

import { Mail } from '@taskforce/shared-types';


@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendEmail(mail: Mail): Promise<SentMessageInfo>
  {
    return this.mailerService.sendMail(mail);
  }
}
