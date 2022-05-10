const express = require("express");
const ArchiveGroup = require('./ArchiveGroup.js')
const fs = require("fs")

const path = require("path");
const app = express();

const group = new ArchiveGroup('./productos.json')

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})


app.get("/productos", async (req, res) => {
    try {
        res.json(await group.getAll());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.get("/api/productos/:id", async (req, res) => {
    //llenar
});

app.post("/api/productos/", async (req, res) => {
    //llenar
});

app.put("/api/productos/:id", async (req, res) => {
    //llenar
});

app.delete("/api/productos/:id", async (req, res) => {
    //llenar
});

app.listen(8080, ()=>{
    console.log("server listening on port", 8080)
})

