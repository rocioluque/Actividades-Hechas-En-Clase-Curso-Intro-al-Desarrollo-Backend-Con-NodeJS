//Importa y configura Mongoose:
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/empresa", {});

//Define el esquema y modelo de la tabla clientes:
const clienteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  email: String,
});

const Cliente = mongoose.model("Cliente", clienteSchema);

//Crea un nuevo cliente:

// const nuevoCliente = new Cliente({
//   nombre: "Juan",
//   edad: 30,
//   email: "juan@example.com",
// });

// const result = nuevoCliente
//   .save()
//   .then(() => {
//     console.log("Cliente guardado correctamente");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Recupera y mestra todos los clientes

// Cliente.find({})
//   .then((clientes) => {
//     console.log("Clientes encontrados:", clientes);
//   })
//   .catch((err) => {
//     console.log("Error al recuperar los clientes:", err);
//   });

//Actualiza un cliente existente:

// Cliente.updateOne({ nombre: "Juan" }, { edad: 31 })
//   .then(() => {
//     console.log("Cliente actualizado correctamente");
//   })
//   .catch((err) => {
//     console.log("Error al actualizar el cliente", err);
//   });

//Elimina un cliente:

Cliente.deleteOne({ nombre: "Juan" })
  .then(() => {
    console.log("Cliente eliminado correctamente");
  })
  .catch((err) => {
    console.log("Error al eliminar el cliente", err);
  })