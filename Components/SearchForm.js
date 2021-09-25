export function SearchForm() {
  const $form = document.createElement("form"),
    $fieldset = document.createElement("fieldset"),
    $input = document.createElement("input"),
    $inputBtn = document.createElement("input"),
    $i = document.createElement("i"),
    $div = document.createElement("div");
  $div.classList.add("cajabuscar");
  $form.method = "get";
  $form.classList.add("form-search");
  $input.name = "search";
  $input.type = "search";
  $input.id = "s";
  $input.placeholder = "Busca tu Producto ...";
  $inputBtn.classList.add("button");
  $inputBtn.type = "submit";
  $i.classList.add("search");
  $div.appendChild($form);
  $form.appendChild($fieldset);
  $fieldset.appendChild($input);
  $fieldset.appendChild($inputBtn);
  $fieldset.appendChild($i);
  return $form;
}
