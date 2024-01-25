'use strict';

function creaSeccionProductos(tituloSeccion) {
    let pTituloSeccion, articleSeccionProductos, sectionProductos;

    articleSeccionProductos = document.querySelector(".secciones-productos");
    pTituloSeccion = document.createElement("p");
    pTituloSeccion.appendChild(document.createTextNode(tituloSeccion));
    pTituloSeccion.className = "titulo-seccion";
    articleSeccionProductos.appendChild(pTituloSeccion);

    sectionProductos = document.createElement("section");
    sectionProductos.className = "productos";
    articleSeccionProductos.appendChild(sectionProductos);
}