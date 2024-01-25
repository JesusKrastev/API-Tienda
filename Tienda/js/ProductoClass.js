class Producto {
    constructor(datosJSON) {
        this.nombre = datosJSON.title;
        this.descripcion = datosJSON.description;
        this.precio = datosJSON.price;
        this.imagen = datosJSON.image;
        this.categoria = datosJSON.category;
    }
}