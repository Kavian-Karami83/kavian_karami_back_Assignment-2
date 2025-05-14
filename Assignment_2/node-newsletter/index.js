import { getFeeds } from './rss/fetchFeeds.js';
import { generateEmailHTML } from './email/template.js';
import { sendEmailtoALL } from './email/sendEmail.js';
import { getRecipients } from './database/models.js';
import { logger } from './utils/logger.js'

async function start() {
    try {
        const feedItems = await getFeeds();
        const emailHTML = generateEmailHTML(feedItems);
        const recipents = await getRecipients();
        await sendEmailtoALL(recipents, emailHTML)
        logger.info("send Email Ok")

    } catch (error) {
        logger.error("stop app , error")

    };
}
start();
