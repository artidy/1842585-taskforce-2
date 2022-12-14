import { Module } from '@nestjs/common';

import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailConfig } from '../../config/mail.config';

@Module({
  imports: [
    MailerModule.forRoot(getMailConfig())
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
