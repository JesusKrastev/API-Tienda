'use strict';

async function cargaImagenPersona() {
    let persona = await obtenDatosPersona("https://randomuser.me/api/");
    document.querySelector(".perfil-usuario").src = persona.results[0].picture.large || "../img/IconoPerfil.png";
}