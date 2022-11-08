const cors = require("cors");
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),



//methodOverride = require("method-override");
mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

app.use(cors());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, XRequested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-auth-token' );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    });
//rutas
app.use(require('./src/routers/router'));
app.use(require("./src/routers/usuarios"));
app.use(require("./src/routers/auth"));
app.use(require("./src/routers/proyectos"));
app.use(require("./src/routers/tareas"));
app.use(require("./src/routers/envios"));
app.use(require("./src/routers/clientes"));
//exportar
module.exports = app;
    