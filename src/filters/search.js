import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (product) => {
    const input = getElement('.search-input');
    const form = getElement('.input-form');

    form.addEventListener('keyup', () => {
      const value = input.value;

      if (value) {
        const newStore = product.filter((store) => {
          const { name } = store;
          if (name.startsWith(value)) {
            return store;
          }
        });
        display(newStore, getElement('.products-container'), true);
        if (newStore.length < 1) {
          getElement('.products-container').innerHTML = `
              <h3 class="filter-error">Sorry, there is no item to display in your search </h3>
            `;
        }
      } else {
        display(product, getElement('.products-container'), true);
      }
    });
};

export default setupSearch;
