<div align="center">
  <h1> Node.js Newsletter Application</h1>
  <p>ارسال خبرنامه از طریق RSS با Node.js، PostgreSQL و Nodemailer</p>
</div>

---

## درباره پروژه

این اپلیکیشن با استفاده از Node.js ساخته شده و وظیفه‌اش دریافت خبرهای جدید از منابع RSS ذخیره‌شده در دیتابیس و ارسال آن‌ها به لیست گیرنده‌های ایمیل است. ساختار پروژه مدولار، قابل توسعه و بر اساس ESM (مدول‌های ES6) نوشته شده.

---

## تکنولوژی‌ها و پکیج‌ها

- Node.js (ESM)
- PostgreSQL (Neon DB)
- [rss-parser](https://www.npmjs.com/package/rss-parser)
- [nodemailer](https://nodemailer.com/about/)
- [Mailtrap.io](https://mailtrap.io/) برای تست ایمیل
- dotenv برای مدیریت متغیرهای محیطی

---

## ساختار پروژه
newsletter-app/
├── .env
├── .env.sample
├── .gitignore
├── README.md
├── package.json
└── src/
├── config/
│ └── config.js
├── db/
│ └── index.js
├── rss/
│ └── fetchFeeds.js
├── email/
│ └── sendEmail.js
├── utils/
│ └── template.js
└── index.js
## راه اندازی  
npm start 