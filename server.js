const express = require('express');
const res = require('express/lib/response');
const { controladoresApi } = require('./controllers/controladoresApi.js')
const { controladoresWeb } = require('./controllers/controladoresWeb.js')
const { createProductSchema, updateProductSchema } = require("./helpers/schema")
const validateInformation = require ("./helpers/middleware")

const path = require("path")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.get('/inicio', controladoresWeb.inicio)
app.get('/perfil', controladoresWeb.perfil)

app.get('/api/info', controladoresApi.getInfo)
app.get('/api/profes', controladoresApi.getProfes)
app.get('/api/productos', controladoresApi.getProductos)
app.get('/api/productos/:idProducto', controladoresApi.getProducto)


app.post('/api/productos',validateInformation(createProductSchema), controladoresApi.postProductos)

app.put('/api/productos/:idProducto',validateInformation(updateProductSchema), controladoresApi.putProducto)

app.delete('/api/productos/:idProducto', controladoresApi.deleteProducto)


app.listen(8080, () => {
    console.log("server running on port", 8080)
});