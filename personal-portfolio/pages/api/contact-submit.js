// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
export default async function handler(req, res) {
  const { name, email, message } = req.body.data;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "zand.braxton@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name}</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>`,
    });

    console.log("Message Sent", emailRes.messageId);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body);
}
