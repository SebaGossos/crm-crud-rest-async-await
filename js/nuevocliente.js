import { showAlert } from "./funciones.js";
import { newClient } from "./API.js";
(function () {
  const form = document.querySelector("#formulario");
  form.addEventListener("submit", validateClient);

  function validateClient(e) {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const enterprise = document.querySelector("#empresa").value;

    const client = {
      name,
      email,
      phone,
      enterprise,
    };
    
    // console.log(isEmpty(client))
    if (isEmpty(client)) {
      showAlert("Todos los campos son obligatorios");
      return;
    }
    newClient( client )
  }
  
  // functions
  const isEmpty = (obj) => !Object.values(obj).every((input) => input?.trim() !== "");

})();
