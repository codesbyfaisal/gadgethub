(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=u(e);fetch(e.href,a)}})();const d=()=>`
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
  `,s=document.querySelector(".navbar");s.innerHTML=d();const f=s.getAttribute("active-page");s.querySelectorAll(".navbar-link").forEach(i=>{i.classList.contains(f)&&i.querySelector("a").classList.add("active")});let r=!1;const o=s.querySelector(".menu-toggler");o.addEventListener("click",()=>{s.querySelector(".nav-links").classList.toggle("show-menu");const t=o.querySelector(".las");l.classList.contains("none")||l.classList.add("none"),r?(t.classList.replace("la-times","la-bars"),r=!1):(t.classList.replace("la-bars","la-times"),r=!0)});const p=s.querySelector(".nav-search"),l=s.querySelector("#nav-search-input");document.addEventListener("click",i=>{const t=s.querySelector(".nav-links");!s.contains(i.target)&&t.classList.contains("show-menu")&&t.classList.remove("show-menu"),!s.contains(i.target)&&!l.classList.contains("none")&&l.classList.add("none")});p.addEventListener("click",()=>{l.classList.toggle("none")});const g=()=>`<div class="container gap-2">
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
    </div>`,m=document.querySelector("footer");m.innerHTML=g();
