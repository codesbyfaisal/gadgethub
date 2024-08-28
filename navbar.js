const navbarHtml = () => {
  return (`
    <div class="container flex-between-center gap-2">
      <a href="./" class="logo">GadgetHub</a>

      <ul class="nav-links flex-between-center gap-2">
        <li class="navbar-link home"><a href="/">Home</a></li>
        <li class="navbar-link products"><a href="/">Products</a></li>
        <li class="navbar-link about"><a href="./about.html">About</a></li>
        <li class="navbar-link contact"><a href="./contact.html">Contact</a></li>
      </ul>

      <div class="nav-actions flex-between-center">
        <button type="button" class="nav-search">
        <i class="las la-search" style="font-size: 1.6rem;"></i>
        </button>
        <a href="./login.html">
        <i class="las la-user" style="font-size: 1.8rem;"></i></a>
        <a href="./addToCart.html" class="cart-menu">
        <i class="las la-shopping-cart" style="font-size: 1.8rem;"></i>
        <span class="cart-badge">0</span>
        </a>
        
        <button type="button" class="none menu-toggler">
        <i class="las la-bars"></i>
        </button>
        
        <input type="search" placeholder="Search" id="nav-search-input" class="nav-search-input none">
      </div>
    </div>
  `)
}

const navbar = document.querySelector('.navbar');
navbar.innerHTML = navbarHtml()


const activePage = navbar.getAttribute('active-page')

navbar.querySelectorAll('.navbar-link').forEach(link => {
  if (link.classList.contains(activePage)) {
    link.querySelector('a').classList.add('active');
  }
});

let isMenuOpen = false;
const menuToggler = navbar.querySelector('.menu-toggler');

menuToggler.addEventListener('click', () => {
  const navlinks = navbar.querySelector('.nav-links');
  navlinks.classList.toggle('show-menu');
  const icon = menuToggler.querySelector('.las');

  if (!navSearchInput.classList.contains('none')) {
    navSearchInput.classList.add('none');
  }

  if (!isMenuOpen) {
    icon.classList.replace('la-bars', 'la-times');
    isMenuOpen = true;

  } else {
    icon.classList.replace('la-times', 'la-bars');
    isMenuOpen = false;
  }
});

const navSearch = navbar.querySelector('.nav-search');
const navSearchInput = navbar.querySelector('#nav-search-input');

document.addEventListener('click', (e) => {
  const navlinks = navbar.querySelector('.nav-links');
  if (!navbar.contains(e.target) && navlinks.classList.contains('show-menu')) {
    navlinks.classList.remove('show-menu');
  }

  if (!navbar.contains(e.target) && !navSearchInput.classList.contains('none')) {
    navSearchInput.classList.add('none');
  }
})

navSearch.addEventListener('click', () => {
  navSearchInput.classList.toggle('none');
})