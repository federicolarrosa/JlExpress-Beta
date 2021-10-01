export function Articulos(props) {
  let { precio, id, title, thumbnailUrl } = props;

  thumbnailUrl = "../img/logo1_v2_L.png"; // thumbnailUrl ? thumbnailUrl : "../img/logo1.png";

  /*  document.addEventListener("click", (e) => {
    if (!e.target.matches(".cards a")) return false;
    localStorage.setItem("id", e.target.dataset.id);
  }); */

  return `
  
  <section class="articulos" >
  <div>
       <img src=${thumbnailUrl} alt="${title}"/>    
      </div> 
      <hr>   
  <aside>    
       <h2>${title}</h2>
        <p>$${precio}
                 <button class="btn btn-dark">Comprar</button>
                 <button class="btn btn-info btn-sm">
                +
            </button>
            <button class="btn btn-danger btn-sm">
                -
            </button>
                 </p>
       </aside>
       
     </section>
  
    `;
}
