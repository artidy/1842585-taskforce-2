import { ConfigService, registerAs } from '@nestjs/config';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';

export const mailOptions = registerAs('mail', () => ({
  server: process.env.SMTP_SERVER,
  port: process.env.SMTP_SERVER_PORT,
  email: process.env.ADMIN_EMAIL,
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD
}));

export function getMailConfig(): MailerAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      transport: {
        host: configService.get<string>('mail.server'),
        port: configService.get<number>('mail.port'),
        ignoreTLS: true,
        secure: false,
      },
      defaults: {
        from: `"No Reply" <${ configService.get<string>('mail.email') }>`,
      },
      preview: true,
    }),
    inject: [ConfigService]
  }
}
