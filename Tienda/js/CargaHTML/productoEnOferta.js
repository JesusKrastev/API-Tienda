'use strict';

async function cargaProductoEnOferta() {
    let articleProductoOferta, sectionInformacion, sectionImagen, pNombre, pDescripcion, divBotones, img, boton;
    let producto;

    producto = await obtenDatosProducto(obtenEnlaceProductoAleatorio(1, 20 + 1));
    
    articleProductoOferta = document.querySelector(".producto-oferta");
    sectionInformacion = document.createElement("section");
    sectionInformacion.className = "informacion-producto-oferta";
    pNombre = document.createElement("p");
    pNombre.className = "nombre-producto-oferta";
    pNombre.appendChild(document.createTextNode(producto.nombre));
    sectionInformacion.appendChild(pNombre);
    pDescripcion = document.createElement("p");
    pDescripcion.className = "descripcion-producto-oferta";
    pDescripcion.appendChild(document.createTextNode(producto.descripcion));
    sectionInformacion.appendChild(pDescripcion);
    divBotones = document.createElement("div");
    divBotones.className = "botones-producto-oferta";
    boton = document.createElement("button");
    boton.className = "boton-comprar-producto-oferta";
    boton.appendChild(document.createTextNode("Comprar"));
    divBotones.appendChild(boton);
    boton = document.createElement("button");
    boton.className = "boton-reservar-producto-oferta";
    boton.appendChild(document.createTextNode("Reservar"));
    divBotones.appendChild(boton);
    sectionInformacion.appendChild(divBotones);
    sectionImagen = document.createElement("section");
    sectionImagen.className = "seccion-imagen-producto-oferta";
    img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = "producto";
    img.className = "imagen-producto-oferta";
    sectionImagen.appendChild(img);

    articleProductoOferta.appendChild(sectionInformacion);
    articleProductoOferta.appendChild(sectionImagen);
}