import products from './db/products.json';
import updateCartStorage from './updateCartStorage.js';
import updateCartBadge from './updateCartBadge.js';
import showToast from './showToast.js';

const emptyCart = document.querySelector('.empty-cart')

const calculateCartTotal = (discout) => {
  let total = 0;
  const storedProducts = JSON.parse(window.localStorage.getItem('cartsArray')) || [];

  if (storedProducts.length === 0) {
    emptyCart.classList.toggle('none');
  }

  storedProducts.forEach(product => {
    total += product.totalItems * product.price
  })

  total = Math.floor(total)
  document.querySelector('.cart-total span').innerHTML = `Rs. ${total}`

  discout === 0 ? total : total = Math.floor(total - total * discout / 100)

  document.querySelector('.final-total span').innerHTML = `Rs. ${total}`

  console.log(total);
}
calculateCartTotal(0)

function addToCart() {
  const storedProducts = JSON.parse(window.localStorage.getItem('cartsArray'))

  const cartsContainer = document.querySelector('.carts-container');

  storedProducts.forEach(storedItem => {
    const { id, totalItems } = storedItem;

    const product = products.find(product => product.id === id);
    const { name, price, img } = product;

    const cartCardClone = document.importNode(document.querySelector('.cart-card-template').content, true);

    const cartCard = cartCardClone.querySelector('.cart-card');
    const cartImage = cartCardClone.querySelector('.cart-image img');
    const cartTitle = cartCardClone.querySelector('.cart-title');
    const cartPrice = cartCardClone.querySelector('.cart-price');
    const totalPieces = cartCardClone.querySelector('.total-pieces span');
    const increament = cartCardClone.querySelector('.increament');
    const decreament = cartCardClone.querySelector('.decreament');
    const removeFromCart = cartCardClone.querySelector('.remove');

    cartCard.setAttribute('product-id', id);
    cartImage.src = img;
    cartTitle.textContent = name;
    cartPrice.textContent = `Rs. ${price}`;
    totalPieces.textContent = totalItems;
    cartsContainer.append(cartCardClone);

    increament.addEventListener('click', () => {
      let total = totalPieces.innerHTML;
      total = parseInt(total);
      totalPieces.innerHTML = ++total;
      updateCartStorage(id, total, price);
      calculateCartTotal(0)
    });

    decreament.addEventListener('click', () => {
      let total = totalPieces.innerHTML;
      total = parseInt(total);
      if (total == 0) return false
      totalPieces.innerHTML = --total;
      updateCartStorage(id, total, price);
      calculateCartTotal(0)

      if (storedProducts.length === 0) {
        emptyCart.classList.toggle('none');
        return false
      }
    });

    removeFromCart.addEventListener('click', () => {
      cartCard.remove();
      updateCartStorage(product.id, 0)
      updateCartBadge()
      calculateCartTotal(0)
      showToast('Product remove from the cart')
    });
  })
}

document.querySelector('.apply-coupon').addEventListener('click', () => {
  const couponCode = document.getElementById('coupon-code').value.toLowerCase().trim();
  if (couponCode === 'xcver') {
    calculateCartTotal(10)
    console.log('coupon applied');
  }
})


JSON.parse(window.localStorage.getItem('cartsArray')) || [];
window.addEventListener('load', () => {
  const storedProducts = JSON.parse(window.localStorage.getItem('cartsArray')) || [];

  if (storedProducts.length !== 0) {
    addToCart()
    updateCartBadge()
  }

  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  document.body.style.overflowY = "visible"
})
