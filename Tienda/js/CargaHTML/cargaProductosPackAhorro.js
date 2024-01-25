'use strict';

async function cargaProductoPackAhorro() {
    let divProducto, producto;
    let divInformacionProducto, imgProducto, divCarateristicasProducto, p;

    producto = await obtenDatosProducto(obtenEnlaceProductoAleatorio(1, 20 + 1));
    
    divProducto = document.createElement("div");
    divProducto.className = "producto";
    divInformacionProducto = document.createElement("div");
    divInformacionProducto.className = "informacion-producto";
    imgProducto = document.createElement("img");
    imgProducto.src = producto.imagen;
    imgProducto.alt = "Producto";
    imgProducto.className = "imagen-producto";
    divCarateristicasProducto = document.createElement("div");
    divCarateristicasProducto.className = "caracteristicas-producto";
    p = document.createElement("p");
    p.className = "descripcion-producto";
    p.appendChild(document.createTextNode(producto.nombre));
    divCarateristicasProducto.appendChild(p);
    p = document.createElement("p");
    p.className = "precio-producto";
    p.appendChild(document.createTextNode(producto.precio.toString() + "€"));
    divCarateristicasProducto.appendChild(p);

    divInformacionProducto.appendChild(imgProducto);
    divInformacionProducto.appendChild(divCarateristicasProducto);
    divProducto.appendChild(divInformacionProducto);

    document.querySelector(".contenedor-pack-ahorro").appendChild(divProducto);
}