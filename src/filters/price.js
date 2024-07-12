import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const inputPrice = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  inputPrice.value = maxPrice;
  inputPrice.max = maxPrice;
  inputPrice.min = 0;
  priceValue.textContent = `Price Value: $${maxPrice}`;
  //   console.log(maxPrice);

  inputPrice.addEventListener('input', () => {
    const value = parseInt(inputPrice.value);
    priceValue.textContent = `Price Value: $${value}`;
    let newStore = [];
    newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement('.products-container'));
    if (newStore.length < 1) {
      getElement('.products-container').innerHTML = `
          <h3 class="filter-error">Sorry, there are no item to display in your search </h3>
          `;
    }
    // console.log(newStore);
  });
};

export default setupPrice;
