import showToast from './showToast.js';

const updateCartStorage = (id, totalItems, price) => {
  let storedProducts = JSON.parse(window.localStorage.getItem('cartsArray')) || [];

  const cartItem = { id, totalItems, price };

  if (storedProducts.some(product => product.id === id)) {
    storedProducts.forEach(product => {
      if (product.id === id) {
        product.totalItems = totalItems;
        showToast('Product updated in cart')
      }
    });
  } else {
    storedProducts.push(cartItem);
    showToast('Product added to cart')
  }

  if (totalItems === 0) {
    storedProducts = storedProducts.filter(product => product.totalItems !== 0);
  }

  window.localStorage.setItem('cartsArray', JSON.stringify(storedProducts));
}

export default updateCartStorage