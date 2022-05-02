const express = require("express");
const GrupoArchivo = require('./GrupoArchivo.js')

const path = require("path");

const app = express();

async function main() {
    const grupo = new GrupoArchivo('./productos.json')

    const producto1 = {
        title: 'escuadra',
        price: 123.45,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
        id: 1
    }

    await grupo.agregar(producto1)

    console.log(await grupo.obtenerTodas())
}

main()

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(8080, ()=>{
    console.log("server listening on port", 8080)
})