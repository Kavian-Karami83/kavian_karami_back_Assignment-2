import { Parser } from "rss-parser";
import {getRSSFeeds} from '../database/models.js';
const parser = new Parser();
export async function getFeeds() {
    const rssFeeds = await getRSSFeeds();
    let allItems = [];
    for (const feed of rssFeeds){
        try {
            const parsed = await parser.parseURL(feed.rss_url);
            allItems = allItems.concat(parsed.items);
        }catch (error){
            console.error(`Error fetching RSS feed from ${feed.rss_url}:`, error.mesage);
        }
    }
    return allItems;
    
}
