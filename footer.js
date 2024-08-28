const footerHtml = () => {
  return (`<div class="container gap-2">
      <div class="footer-about">
        <a href="/" class="logo">GadgetHub</a>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, praesentium? Eum recusandae distinctio
          et
          laborum, asperiores molestiae quis officia sit.</p>

        <div class="social-links">
          <a href=""><i class="lab la-facebook-f"></i></a>
          <a href=""><i class="lab la-twitter"></i></a>
          <a href=""><i class="lab la-instagram"></i></a>
          <a href=""><i class="lab la-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footer-content gap-1">
        <div class="quick-links">
          <h2>Quick Links</h2>
          <ul class="grid gap-1-half">
            <li><a href="">My Account</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Payment Options</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div class="footer-products">
          <h2>Categories</h2>
          <ul class="grid gap-1-half">
            <li><a href="">Laptop</a></li>
            <li><a href="">Mobile</a></li>
            <li><a href="">Tablet</a></li>
            <li><a href="">Smart Watch</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h2>Contact Us</h2>
          <ul class="grid gap-1-half">
            <li><i class="las la-phone"></i>&nbsp;+123 456 789</li>
            <li><i class="las la-envelope"></i>&nbsp;Wk5Xt@example.com</li>
            <li><i class="las la-map-marker"></i>&nbsp;123 Main Street, Anytown, USA</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="copyright container flex-between-center">
      <p>&copy; 2024 GadgetHub. All rights reserved.</p>
      <div class="payment-options flex-between-center">
        <img loading="lazy" src="img/visa.png" alt="visa">
        <img loading="lazy" src="img/mastercard.png" alt="mastercard">
        <img loading="lazy" src="img/paypal.png" alt="paypal">
        <img loading="lazy" src="img/american-express.png" alt="american-express">
        <img loading="lazy" src="img/carte_bleue.png" alt="maestro">
      </div>
    </div>`)
}

const footer = document.querySelector('footer');
footer.innerHTML = footerHtml()