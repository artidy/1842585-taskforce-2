import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Mail } from '@taskforce/shared-types';

import { MailService } from './mail.service';
import { mailOptions } from '../../config/mail.config';

@ApiTags('mail')
@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    @Inject(mailOptions.KEY)
    private readonly mailConfig: ConfigType<typeof mailOptions>
  ) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Рассылка успешно отправлена'
  })
  @Get('/')
  @HttpCode(HttpStatus.OK)
  public async index() {

    const mail: Mail = {
      to: [ { name: 'Andrey Pechennikov', address: 'ap@taskforce.com' } ],
      from: { name: 'Admin', address: this.mailConfig.email },
      subject: 'test',
      text: 'Hello, Andrey!'
    }

    return this.mailService.sendEmail(mail);
  }
}
