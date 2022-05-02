const fs = require('fs')

class GrupoArchivo {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    _leer() {
        return fs.promises.readFile(this.ruta, 'utf-8')
            .then(texto => {
                const productosComoArray = JSON.parse(texto)
                this.productos = productosComoArray
            })
    }

    async obtenerTodas() {
        await this._leer()
        return [...this.productos]
    }

}

module.exports = GrupoArchivo