import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const body = await req.json();

  if (
    !body.name ||
    !body.email ||
    !body.subject ||
    !body.message
  ) {
    return NextResponse.json({ msg: "incomplete fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASS_EMAIL}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: `${process.env.EMAIL}`,
    to: `joaquin.rojasmoschini@gmail.com`,
    subject: `${body.subject}`,
    text: `Nombre: ${body.name}\nEmail: ${body.email}\nMensaje: ${body.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json("email sended");
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};