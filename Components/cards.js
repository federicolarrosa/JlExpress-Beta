export function Cards(props) {
  let { precio, id, title, thumbnailUrl } = props;

  thumbnailUrl = "../img/logo1_v2_L.png"; // thumbnailUrl ? thumbnailUrl : "../img/logo1.png";

  return `
  <article class="cards" id="${id}" >
       <img src=${thumbnailUrl} alt="${title}"/>
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
  </article>
    `;
}
