import { NextResponse, NextRequest } from 'next/server';
import { createTransport } from 'nodemailer';

export const POST = async (req: NextRequest) => {
  try {
    const transporter = createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const { firstname, lastname, email, phone, inquiry, details } =
      await req.json();

    const message = `
      名前: ${firstname} ${lastname}

      Email: ${email}

      電話番号: ${phone ? phone : 'no input'}

      お問い合わせ種別: ${inquiry}

      お問い合わせ詳細
      ${details}
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'お問い合わせ',
      text: message,
    });

    return NextResponse.json({ message: 'Success!', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Failed! ${error}`, status: 500 });
  }
};
