const express = require("express");

const routerProductos = express.Router();

// routerProductos.get("/", (req, res) => {
//   const authToken = req.header("Authorization");
//   // Aquí puedes usar el authToken para autenticar al usuario o realizar validaciones adicionales
//   res.send(`Token de autorización: ${authToken}`);
// });

routerProductos.get("/", (req, res, next) => {
  const productos = [
    { id: 1, nombre: "Tablet" },
    { id: 2, nombre: "PC" },
  ];

  return next({status: 400, message: "Error"});
  res.json(productos);
});

routerProductos.get("/:id", (req, res) => {
  const productoId = req.params.id;
  // Lógica para obtener información del usuario con el ID especificado
  res.send(`Información del producto con ID ${productoId}`);
});

// routerProductos.post("/", (req, res) => {
//   // Lógica para crear un nuevo usuario
//   res.send("Producto creado correctamente");
// });

routerProductos.post("/", (req, res) => {
  const producto = req.body;
  // Aquí puedes guardar el nuevo producto en la base de datos o realizar otras operaciones relacionadas con el producto
  res.send(`Guardar nuevo producto: ${JSON.stringify(producto)}`);
});

routerProductos.put("/", (req, res) => {
  // Lógica para crear un nuevo usuario
  res.send("Producto modificado correctamente");
});

module.exports = routerProductos;
