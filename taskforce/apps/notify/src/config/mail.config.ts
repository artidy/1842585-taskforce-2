import { ConfigService, registerAs } from '@nestjs/config';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailerOptions } from '@nestjs-modules/mailer';

const TEMPLATES_DIRECTORY = '/template/';

export const mailOptions = registerAs('mail', () => ({
  server: process.env.SMTP_SERVER,
  port: process.env.SMTP_SERVER_PORT,
  email: process.env.ADMIN_EMAIL,
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD
}));

export async function getMailConfig(configService: ConfigService): Promise<MailerOptions> {
  return {
    transport: {
      host: configService.get<string>('mail.server'),
      port: configService.get<number>('mail.port'),
      ignoreTLS: true,
      secure: false,
      auth: {
        user: configService.get<string>('mail.user'),
        pass: configService.get<string>('mail.password'),
      },
    },
    defaults: {
      from: `"No Reply" <${ configService.get<string>('mail.email') }>`,
    },
    preview: true,
    template: {
      dir: process.cwd() + TEMPLATES_DIRECTORY,
      adapter: new PugAdapter(),
      options: {
        strict: true,
      },
    },
  }
}
