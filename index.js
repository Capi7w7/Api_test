const express = require('express');
const { getVehiculo, getVehiculoById } = require('./controllers/vehiculos.controller');
const app = express();
const port = 3001;


app.get("/", getVehiculo);

app.get("/:id", getVehiculoById);


app.listen(port, () => {
    console.log(`App corriendo en http://localhost:${port}`);
});