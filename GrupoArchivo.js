const fs = require('fs')
const Producto = require('./Producto.js')

class GrupoArchivo {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    _guardar() {
        const productosComoJson = JSON.stringify(this.productos, null, 2)
        return fs.promises.writeFile(this.ruta, productosComoJson)
    }

    _leer() {
        return fs.promises.readFile(this.ruta, 'utf-8')
            .then(texto => {
                const productosComoArray = JSON.parse(texto)
                this.productos = productosComoArray
            })
    }

    estaIncluido(id) {
        if(this.productos.length == 0) {
            return false
        }
        return this.productos.some(prod => prod.id === id)
    }

    async agregar(datos) {
        const producto = new Producto(datos.title, datos.price, datos.thumbnail, datos.id)
        await this._leer()
        if (!this.estaIncluido(datos.id)) {
            this.productos.push(producto)
            await this._guardar()
        }
    }

    async obtenerTodas() {
        await this._leer()
        return [...this.productos]
    }

    async borrarProducto(id) {
        await this._leer()
        const indice = this.productos.findIndex(producto => producto.id === id)
        if (indice !== -1) {
            this.productos.splice(indice, 1)
            await this._guardar()
        }
    }
}

module.exports = GrupoArchivo