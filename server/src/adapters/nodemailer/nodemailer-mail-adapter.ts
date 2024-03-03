import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "4daba328657639",
        pass: "c9a93f665dd21b",
      },
    });

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "KEned Felix <kened.felix@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
