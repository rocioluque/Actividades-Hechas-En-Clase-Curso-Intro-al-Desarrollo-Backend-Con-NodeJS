const express = require("express");
const app = express();
const routerProductos = require("./routes/productos");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/productos", routerProductos);

app.use((err, req, res, next) => {
  // Manejo de errores
  res.status(err.status || 500);
  res.json({
    error: err.message,
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});
