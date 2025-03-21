import { editClient, getClient } from "./API.js";
import { isEmpty, showAlert } from "./funciones.js";

(function () {

  const nameInput = document.querySelector('#nombre')
  const emailInput = document.querySelector('#email')
  const phoneInput = document.querySelector('#telefono')
  const enterpriseInput = document.querySelector('#empresa')
  const idInput = document.querySelector('#id')
  
  document.addEventListener('DOMContentLoaded', async() => {
    const paramsUrl = new URLSearchParams( window.location.search )

    const idClient = paramsUrl.get('id');

    const client = await getClient( idClient )

    showClient( client  )

    //Submit form 
    const form = document.querySelector('#formulario')
    form.addEventListener('submit', validateClient)

  })

  function showClient( client ) {
    const { name, email, phone, enterprise, id } = client;
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    enterpriseInput.value = enterprise;
    idInput.value = id;
  } 

  function validateClient( e ) {
    e.preventDefault();
    
    const client = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      enterprise: enterpriseInput.value,
      id: idInput.value
    };

    if (isEmpty(client)) {
      showAlert("Todos los campos son obligatorios");
      return;
    }
    editClient( client )
  }
  
})();
