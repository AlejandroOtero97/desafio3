class Productos {
    constructor(title, price, thumbnail, id) {

        if (!title) throw new Error('falta el titulo')
        if (!price) throw new Error('falta el precio')
        if (!thumbnail) throw new Error('falta la imagen')
        if (price < 0) throw new Error('el valor debe ser mayor a 0')

        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.id = id
    }
}

module.exports = Productos