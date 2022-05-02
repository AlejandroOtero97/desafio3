const express = require("express");
const GrupoArchivo = require('./GrupoArchivo.js')

const path = require("path");

const app = express();

async function main() {
    const grupo = new GrupoArchivo('./productos.json')

    console.log(await grupo.obtenerTodas())
}

main()

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(8080, ()=>{
    console.log("server listening on port", 8080)
})