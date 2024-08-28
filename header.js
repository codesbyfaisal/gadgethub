const headerHtml = () => {
  return (`<div class="container flex-between-center gap-2">
      <a href="">Help Center</a>
      <p class="header-offer">Register to get 10% off on your first order!
        <a href="/register.html" class="header-register">Register Now</a>
      </p>

      <a href="" class="flex-between-center"><i class="las la-globe"></i>&nbsp;Our Stores</a>
    </div>`)
}

const header = document.querySelector('header');
header.innerHTML = headerHtml()