const updateCartBadge = () => {
  const cartBadge = document.querySelector('.cart-badge');
  const storedProducts = JSON.parse(window.localStorage.getItem('cartsArray')) || [];
  cartBadge.innerHTML = storedProducts.length
}

export default updateCartBadge