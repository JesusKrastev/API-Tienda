'use strict';

function cargaCategorias() {
    let sectionBotones, button, articleCategorias;

    articleCategorias = document.querySelector(".categorias");
    
    sectionBotones = document.createElement("section");
    sectionBotones.className = "botones-categorias";
    button = document.createElement("button");
    button.className += "btn-categoria-todos";
    button.className += " btn-categoria";
    button.appendChild(document.createTextNode("Todos"));
    sectionBotones.appendChild(button);
    button = document.createElement("button");
    button.className += "btn-categoria-electronica";
    button.className += " btn-categoria";
    button.appendChild(document.createTextNode("Electrónica"));
    sectionBotones.appendChild(button);
    button = document.createElement("button");
    button.className += "btn-categoria-ropa";
    button.className += " btn-categoria";
    button.appendChild(document.createTextNode("Ropa"));
    sectionBotones.appendChild(button);
    button = document.createElement("button");
    button.className += "btn-categoria-joyas";
    button.className += " btn-categoria";
    button.appendChild(document.createTextNode("Joyas"));
    sectionBotones.appendChild(button);

    articleCategorias.appendChild(sectionBotones);
}