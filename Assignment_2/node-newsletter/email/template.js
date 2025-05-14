export function generateEmailHTML(feedItems) {
    const itemsHTML = feedItems.map(item =>{
        return`
      <li style="margin-bottom: 20px;">
        <a href="${item.link}" target="_blank" style="font-size: 18px; font-weight: bold;">${item.title}</a>
        <p style="margin: 5px 0;">${item.contentSnippet || ''}</p>
        <small style="color: gray;">${new Date(item.pubDate).toLocaleDateString()}</small>
      </li>
    `;
  }).join('');
  return `
    <div style="font-family: Arial, sans-serif;">
      <h2>آخرین خبرها</h2>
      <ul style="list-style-type: none; padding: 0;">
        ${itemsHTML}
      </ul>
    </div>
  `;
}