import nodemailer from 'nodemailer';
import { MAILTRAP_HOST, MAILTRAP_PORT, MAILTRAP_USER, MAILTRAP_PASS } from '../config/config.js';
import pool from '../db/index.js';

const transporter = nodemailer.createTransport({
  host: MAILTRAP_HOST,
  port: Number(MAILTRAP_PORT),
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASS,
  }
});

export async function sendNewsletter(htmlContent) {
  const { rows } = await pool.query('SELECT email FROM recipients');

  const mailOptions = {
    from: '"News Bot" <Kavian.karami83@gmail.com>',
    to: rows.map(row => row.email).join(','),
    subject: 'Your Daily Newsletter',
    html: htmlContent
  };

  await transporter.sendMail(mailOptions);
}
