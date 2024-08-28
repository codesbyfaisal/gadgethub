import products from './db/products.json';

function showCartItems() {
  if (!products) return false

  const cartItemsContainer = document.querySelector('.cart-items-container');

  const productClone = document.importNode(document.querySelector('.product-card-template').content, true);

}

export default showCartItems
