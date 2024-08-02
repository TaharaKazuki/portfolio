/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_TO: process.env.MAIL_TO,
  },
  api: {
    bodyParser: true,
  },
};

export default nextConfig;
