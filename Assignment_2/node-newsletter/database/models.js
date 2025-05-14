import {db} from './connection.js';
export async function getRSSFeeds() {
    const result = await db.query('SELECT * FROM rss_feeds');
    return result.rows;
}