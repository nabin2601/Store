// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import '../../indexpage/navlink.js'
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
// const imgDOM = getElement('.single-product-img');
// const titleDOM = getElement('.single-product-title');
// const companyDOM = getElement('.single-product-company');
// const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
// const descDOM = getElement('.single-product-desc');

// cart product
let productID;

// show product when page loads

window.addEventListener('DOMContentLoaded', async () => {
  const urlID = window.location.search;
  //   const urlID = `?id=hello`;
  //   console.log(urlID);
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      const { id, fields } = data;
      //   console.log(fields);
      productID = id;
      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;
      pageTitleDOM.innerHTML = `<a href="index.html" class="breadCrump">home</a> / ${name}`;
      document.title = `${name.toUpperCase()} | Comfy `;
      centerDOM.innerHTML = `
        <img
          src="${image}"
          class="single-product-img img"
          alt=""
        />
        <article class="single-product-info">
          <div>
            <h2 class="single-product-title">${name}</h2>
            <p class="single-product-company text-slanted">
              by ${company}
            </p>
            <p class="single-product-price">${formatPrice(price)}</p>
            <div class="single-product-colors">
            ${colors
              .map((color) => {
                return `<span class="product-color" style="background-color: ${color};"></span>`;
              })
              .join('')}
            </div>
            <p class="single-product-desc">
            ${description}
            </p>
            <button class="addToCartBtn btn" data-id="${id}">
              add to cart
            </button>
          </div>
        </article>
        `;
      const cartBtn = getElement('.addToCartBtn');
      cartBtn.addEventListener('click', () => {
        addToCart(productID);
      });
    } else {
      centerDOM.innerHTML = `
        <div>
        <h3 class='error'>Oops! something went wrong</h3>
        <a href='index.html' class='btn'>back home</a>
        </div>
        `;
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});
