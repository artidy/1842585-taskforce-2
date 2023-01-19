import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';

import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { getMailConfig } from '../../config/mail.config';

@Module({
  imports: [
    MailerModule.forRootAsync(getMailConfig())
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
