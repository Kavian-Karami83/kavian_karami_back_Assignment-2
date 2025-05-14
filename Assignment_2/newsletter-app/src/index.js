import { fetchAllFeeds } from './rss/fetchFeeds.js';
import { createEmailHTML } from './utils/template.js';
import { sendNewsletter } from './email/sendEmail.js';

async function main() {
  const items = await fetchAllFeeds();
  const html = createEmailHTML(items);
  await sendNewsletter(html);
  console.log("email sent successfully");
}

main().catch(err => console.error('error:', err));
