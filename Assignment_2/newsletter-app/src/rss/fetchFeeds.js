import Parser from 'rss-parser';
import pool from '../db/index.js';

const parser = new Parser();

export async function fetchAllFeeds() {
  const { rows } = await pool.query('SELECT rss_url FROM rss_feeds');
  const allItems = [];

  for (const row of rows) {
    try {
      const feed = await parser.parseURL(row.rss_url);
      allItems.push(...feed.items.slice(0, 10));
    } catch (err) {
      console.error(`error fetching feed ${row.rss_url}:`, err.message);
    }
  }

  return allItems;
}
