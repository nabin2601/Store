import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement('.companies');

  companiesDOM.innerHTML = companies
    .map((company) => {
      return `
        <button class="company-btn">${company}</button>
        `;
    })
    .join('');
  companiesDOM.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('company-btn')) {
      let newStore = [];
      if (el.textContent === 'all') {
        newStore = [...store];
        // console.log(newStore);
      } else {
        newStore = store.filter(
          (product) => product.company === el.textContent
        );
        // console.log(newStore);
      }
      display(newStore, getElement('.products-container'), true);
    }
  });
};

export default setupCompanies;
