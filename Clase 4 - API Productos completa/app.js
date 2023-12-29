const express = require("express");
const app = express();
const routeProductos = require("./routes/productos");
const errorHanddler = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/productos", routeProductos);

app.use(errorHanddler);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
})