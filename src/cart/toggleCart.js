import { getElement } from '../utils.js';

export const openCart = () => {};

const cartOverlay = getElement('.cart-overlay');
const cartClose = getElement('.cart-close');
const cartBtn = getElement('.toggle-cart');

cartClose.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
cartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});