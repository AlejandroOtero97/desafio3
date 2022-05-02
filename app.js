const express = require("express");
const GrupoArchivo = require('./GrupoArchivo.js')

const path = require("path");
const app = express();


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

const grupo = new GrupoArchivo('./productos.json')

app.get("/productos", async (req, res) => {
    try {
        res.json(await grupo.obtenerTodas());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.listen(8080, ()=>{
    console.log("server listening on port", 8080)
})