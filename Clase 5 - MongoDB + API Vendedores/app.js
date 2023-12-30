const express = require('express');
const app = express();
const routeVendedores = require('./routes/vendedores');

app.use(express.json());

app.use('/vendedores', routeVendedores);



//inicar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

