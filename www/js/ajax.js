export async function ajax(props) {
  let { api, cbSuccess } = props;

  await fetch(api)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error a cargar los datos";

      document.getElementById("articulos").innerHTML = `
      <div class="error">
      <p> Error ${err.status}: ${message}</p>
      </div>
      `;
      document.querySelector(".loader").style.display = "none";

      console.log(err);
    });
}
