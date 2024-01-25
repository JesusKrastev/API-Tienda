'use strict';

async function cargaCategoriaElectronica() {
    let divProducto, sectionProductos;
    let divInformacionProducto, imgProducto, divCarateristicasProducto, p, buttonComprar;
    let producto, categoriaCorrecta;

    sectionProductos = document.querySelector('.secciones-productos .productos:last-of-type');
    for (let i = 1; i <= 5; i++) {
        do {
            producto = await obtenDatosProducto(obtenEnlaceProductoAleatorio(1, 20 + 1));
            categoriaCorrecta = (producto.categoria == "electronics");
        } while (!categoriaCorrecta);

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
        buttonComprar = document.createElement("button");
        buttonComprar.className = "btn-comprar-producto";
        buttonComprar.appendChild(document.createTextNode("Comprar"));

        divInformacionProducto.appendChild(imgProducto);
        divInformacionProducto.appendChild(divCarateristicasProducto);
        divProducto.appendChild(divInformacionProducto);
        divProducto.appendChild(buttonComprar);
        sectionProductos.appendChild(divProducto);
    }
}