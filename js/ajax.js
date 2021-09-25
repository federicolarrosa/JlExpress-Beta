export function ajax(props) {
  let { api, cbSuccess } = props;

  fetch(api)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un erroro a cargar los datos";

      document.getElementById("root").innerHTML =
        '<div class="error"><p>Error $(err.status): $(message)</p></div>';

      console.log(err);
    });
}
