import data from '../data/data.js';

import { getElement } from '../src/utils.js';

const navLinks = getElement('.nav-links');
navLinks.innerHTML = data
  .map((pageData) => {
    const { href, text } = pageData;
    return `
            <li>
              <a href="${href}" class="nav-link">
                ${text}
              </a>
            </li>
        `;
  })
  .join('');
const sidebarLinks = getElement('.sidebar-links');
sidebarLinks.innerHTML = data
  .map((pageData) => {
    const { href, text, className } = pageData;
    return `
        <li>
            <a href="${href}" class="sidebar-link">
              <i class="${className} fa-fw"></i>
              ${text}
            </a>
        </li>
        `;
  })
  .join('');
