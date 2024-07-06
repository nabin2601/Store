import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');
const cartOverlay = getElement('.cart-overlay');
const cartClose = getElement('.cart-close');
const cartBtn = getElement('.toggle-cart')

toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});
cartClose.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
cartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('show')
})