import products from './db/products.json';
import updateCartStorage from './updateCartStorage.js';
import updateCartBadge from './updateCartBadge.js';
import showToast from './showToast.js';

const showProducts = () => {
  if (!products) return false

  const productsContainer = document.querySelector('.products-container');

  for (let i = 0; i < 4; i++) {
    const { id, name, price, old_price, stock, img, description } = products[i];

    const productClone = document.importNode(document.querySelector('.product-card-template').content, true);

    const productCard = productClone.querySelector('.product-card');
    const productImage = productClone.querySelector('.product-image');
    const productName = productClone.querySelector('.product-name');
    const productDescription = productClone.querySelector('.product-description');
    const productRating = productClone.querySelector('.product-rating');
    const productPrice = productClone.querySelector('.product-price');
    const totalPieces = productClone.querySelector('.total-pieces');
    const increament = productClone.querySelector('.increament');
    const decreament = productClone.querySelector('.decreament');
    const addtocart = productClone.querySelector('.add-to-cart');
    const expandCard = productClone.querySelector('.expand-card');
    const stockLabel = productClone.querySelector('.stock-label');

    productCard.setAttribute('product-id', id);
    productImage.setAttribute('style',
      `background-image: url('${img}');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      `);
    productName.textContent = name;
    productDescription.textContent = description;
    productRating.innerHTML = `<i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star-half-alt"></i>`;
    productPrice.innerHTML = `<h3 class="new-price">Rs. ${price}</h3>
    <span class="old-price">Rs. ${old_price}</span>`;
    stockLabel.textContent = `${stock} pieces in stock`;


    productsContainer.append(productClone);

    increament.addEventListener('click', () => {
      const total = totalPieces.querySelector('span');
      total.innerHTML = parseInt(total.innerHTML) + 1;
    });

    decreament.addEventListener('click', () => {
      const total = totalPieces.querySelector('span');
      if (total.innerHTML == 0) return false
      total.innerHTML = parseInt(total.innerHTML) - 1;
    });

    addtocart.addEventListener('click', () => {
      const total = totalPieces.querySelector('span');
      const totalItems = parseInt(total.innerHTML)

      updateCartStorage(id, totalItems, price);
      updateCartBadge()
    });

    // expandCard.addEventListener('click', () => {
    //   const expand = productClone.querySelector('.expand-card');
    //   expand.classList.toggle('active');
    // });
  }


}

export default showProducts