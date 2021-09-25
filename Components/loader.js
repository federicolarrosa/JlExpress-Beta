export function Loader() {
    const $loader = document.createElement("img");
    $loader.src ="../img/loader2.svg";
    $loader.alt = "Cargando....";
    $loader.classList.add("loader");

    return $loader
    
}