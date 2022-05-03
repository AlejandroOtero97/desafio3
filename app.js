const express = require("express");
const ArchiveGroup = require('./ArchiveGroup.js')
const fs = require("fs")

const path = require("path");
const app = express();

const group = new ArchiveGroup('./productos.json')

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

function productsNormal() {
    app.get("/productos", async (req, res) => {
        try {
            res.json(await group.getAll());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
}

function productsRandom() {
    let rawData = fs.readFileSync('productos.json');
    let productsRandom = JSON.parse(rawData);
    let randomNumber = Math.floor(Math.random() * productsRandom.length);
    
    app.get("/productosRandom", (req, res) => {
        try {
            res.json(productsRandom[randomNumber]);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
}

app.listen(8080, ()=>{
    console.log("server listening on port", 8080)
})

productsNormal()
productsRandom()