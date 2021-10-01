import { SearchForm } from "./SearchForm.js";

export function Menu() {
  const $menu = document.createElement("nav"),
    $div_car = document.createElement("div");
  $div_car.classList.add("carrito-img");
  $menu.classList.add("menu");

  $menu.innerHTML = `
  <div class="container">
     <figure class="logo">
          <img class="img-logo" src="../img/logo1_v2_L.png" alt"logo">
         </figure>
      </div>
  <div class="contenedor"> 
     <ul>
       <li>
       <a href="#/home" class="item-options">Home</a>
       </li>
       <li>
       <a href="#/categoria" class="item-options">Categoria</a>
       </li>
       <li>
       <a href="#/dama" class="item-options">Dama</a>
       </li>
       <li>
       <a href="#/caballero" class="item-options">Caballero</a>
       </li>
       <li>
       <a href="#Niña" class="item-options">Niña</a>
       </li>
       <li>
       <a href="#/Niño"class="item-options">Niño</a>
       </li>
      <li>
      <a href="#/Deportiva"class="item-options">Deportiva</a>
      </li>
  </ul>
  </div>`;
  $menu.appendChild(SearchForm());
  $menu.appendChild($div_car);
  $div_car.innerHTML = `
 
     <figure class="carito">
          <img class="img-carrito" src="../img/ico_carrito_vacio.png" alt"carrito">
         </figure>
       `;
  //funcion para efecto sticky menu
  function stickyElement(e) {
    var header = document.querySelector(".header");
    var headerHeight = getComputedStyle(header).height.split("px")[0];
    var navbar = document.querySelector(".menu");
    var logo = document.querySelector(".img-logo");
    var scrollValue = window.scrollY;

    if (scrollValue > headerHeight) {
      navbar.classList.add("menu-fixed");
      logo.src = "../img/logo1_v2_S.png";
    } else if (scrollValue < headerHeight) {
      navbar.classList.remove("menu-fixed");
      logo.src = "../img/logo1_v2_L.png";
    }
  }

  window.addEventListener("scroll", stickyElement);
  return $menu;
}
