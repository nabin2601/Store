import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { colors, company, name, price, featured, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, name, featured, price, company, colors, image };
  });
  setStorageItem('store', store);
};
//  console.log(store);
const findProduct = (id) => {
  let item = store.find((product) => product.id === id);
  return item;
};
export { store, setupStore, findProduct };
