export function createEmailHTML(items) {
    return `
      <h1> latest news</h1>
      <ul>
        ${items.map(item => `
          <li>
            <a href=" ${item.link}" target="_blank">${item.title}</a>
            <p>${item.contentSnippet || ''}</p>
          </li>
        `).join('')}
      </ul>
    `;
  }
  