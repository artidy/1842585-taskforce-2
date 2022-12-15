import { registerAs } from '@nestjs/config';
import { MailerOptions } from '@nestjs-modules/mailer';

export const mailOptions = registerAs('mail', () => ({
  server: process.env.SMTP_SERVER,
  port: process.env.SMTP_SERVER_PORT,
  email: process.env.ADMIN_EMAIL,
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD
}));

export function getMailConfig(): MailerOptions {
  const configService = mailOptions();

  return {
    transport: {
      host: configService.server,
      port: +configService.port,
      ignoreTLS: true,
      secure: false,
    },
    defaults: {
      from: `"No Reply" <${ configService.email }>`,
    },
    preview: true,
  }
}
