import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    try {
        const response = await fetch(allProductsUrl)
        if (response) {
            return response.json();
        }
    } catch (error) {
        console.log(error)
    }
};

export default fetchProducts;
