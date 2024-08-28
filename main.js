import showProducts from "./showProducts.js";
import updateCartBadge from "./updateCartBadge.js";

window.addEventListener('load', () => {
  updateCartBadge()
  showProducts();
})
