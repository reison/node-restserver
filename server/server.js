require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = require('path');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// configuración global de rutas
app.use(require('./routes/index'));

/* mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;

    console.log('base de datos online');
}); */

//mongoose.connect('mongodb://localhost:27017/cafe', {
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', process.env.PORT);
})

// voy al video 139!!!