'use strict';

function obtenEnlaceProductoAleatorio(min, max) {
    return API_URL + Math.floor(Math.random() * (max - min) + min);
}

function obtenDatosProducto(enlace) {
    return HTTP.ajax('GET', enlace).then((productoJSON) => {
        return new Producto(productoJSON);
    }).catch((error) => {
        console.log(error);
    });
}

function obtenDatosPersona(enlace) {
    return HTTP.ajax('GET', enlace).then((personaJSON) => {
        return personaJSON;
    }).catch((error) => {
        console.log(error);
    });
}

// PERFIL USUARIO
cargaImagenPersona();

// PRODUCTO EN OFERTA
cargaProductoEnOferta();
// CATEGORÍAS
cargaCategorias();
// SECCIONES PRODUCTOS
creaSeccionProductos("Nuevos productos");
for (let i = 1; i <= 5; i++) 
    cargaProductosSeccion();
creaSeccionProductos("Más productos");
for (let i = 1; i <= 5; i++) 
    cargaProductosSeccion();
// PACK AHORRO
cargaPackAhorro();

// BOTONES
let botones = document.querySelectorAll(".btn-categoria");
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        botones.forEach(btn => btn.classList.remove("btn-categoria-activado"));
        boton.classList.add("btn-categoria-activado");
        document.querySelector(".secciones-productos").textContent = "";
    })
});

document.querySelector(".btn-categoria-todos").addEventListener("click", () => {
    creaSeccionProductos("Nuevos productos");
    for (let i = 1; i <= 5; i++) 
        cargaProductosSeccion();
    creaSeccionProductos("Más productos");
    for (let i = 1; i <= 6; i++) 
        cargaProductosSeccion();
});
document.querySelector(".btn-categoria-electronica").addEventListener("click", () => {
    creaSeccionProductos("Electrónica");
    cargaCategoriaElectronica();
});
document.querySelector(".btn-categoria-ropa").addEventListener("click", () => {
    creaSeccionProductos("Ropa");
    cargaCategoriaRopa();
});
document.querySelector(".btn-categoria-joyas").addEventListener("click", () => {
    creaSeccionProductos("Joyas");
    cargaCategoriaJoyas();
});