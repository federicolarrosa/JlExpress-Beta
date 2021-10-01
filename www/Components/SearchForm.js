export function SearchForm() {
  const $form = document.createElement("form");
  $form.classList.add("search-from");
  $form.innerHTML = `
  <div class="cont">
           <input name="search" type="search" placeholder="Busca tu producto aqui" title="Presione Esc para supender la búsqueda">
    </div>`;
  //grabar la busqueda en el imput

  document.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) {
      localStorage.removeItem("search");
    } else {
      document.getElementsByName("search").value =
        localStorage.getItem("search");
    }
  });
  //busqueda del search
  document.addEventListener("submit", (e) => {
    if (!e.target.matches("search-from")) return false;
    e.preventDefault();
    localStorage.setItem("search", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
