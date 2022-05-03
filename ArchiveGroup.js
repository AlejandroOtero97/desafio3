const fs = require('fs')

class ArchiveGroup {
    constructor(route) {
        this.route = route
        this.products = []
    }

    read() {
        return fs.promises.readFile(this.route, 'utf-8')
            .then(text => {
                const arrayProducts = JSON.parse(text)
                this.products = arrayProducts
            })
    }

    async getAll() {
        await this.read()
        return [...this.products]
    }
}

module.exports = ArchiveGroup