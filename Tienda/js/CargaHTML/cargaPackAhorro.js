'use strict';

async function cargaPackAhorro() {
    let precioTotal = 0, productosPackAhorro, contenedorPack;
    let divInformacionPack, pTituloPack, divPrecios, pPrecioAntiguo, pPrecioNuevo, buttonComprar, imgMas;
    
    contenedorPack = document.querySelector(".contenedor-pack-ahorro");
    imgMas = document.createElement("img");
    imgMas.src = "../img/Inicio/Mas.png";
    imgMas.alt = "+";
    await cargaProductoPackAhorro();
    contenedorPack.appendChild(imgMas);
    await cargaProductoPackAhorro();
    productosPackAhorro = contenedorPack.querySelectorAll(".producto");
    productosPackAhorro.forEach(producto => {
        precioTotal += parseFloat(producto.querySelector(".precio-producto").textContent.replace('€', ''));
    });

    divInformacionPack = document.createElement("div");
    divInformacionPack.className = "informacion-pack-ahorro";
    pTituloPack = document.createElement("p");
    pTituloPack.className = "titulo-pack-ahorro";
    pTituloPack.appendChild(document.createTextNode("PACK AHORRO"));
    divPrecios = document.createElement("div");
    divPrecios.className = "precios-pack-ahorro";
    pPrecioAntiguo = document.createElement("p");
    pPrecioAntiguo.className = "precio-antiguo-pack-ahorro";
    pPrecioAntiguo.appendChild(document.createTextNode(Math.round(precioTotal, 2) + "€"));
    divPrecios.appendChild(pPrecioAntiguo);
    pPrecioNuevo = document.createElement("p");
    pPrecioNuevo.className = "precio-nuevo-pack-ahorro";
    pPrecioNuevo.appendChild(document.createTextNode(Math.round(precioTotal - 20, 2) + "€"));
    divPrecios.appendChild(pPrecioNuevo);
    buttonComprar = document.createElement("button");
    buttonComprar.className = "boton-comprar-pack-ahorro";
    buttonComprar.appendChild(document.createTextNode("Comprar"));
    divInformacionPack.appendChild(pTituloPack);
    divInformacionPack.appendChild(divPrecios);
    divInformacionPack.appendChild(buttonComprar);
    contenedorPack.appendChild(divInformacionPack);
}