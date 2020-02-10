const express = require('express');
const app = express();
const morgan = require('morgan');

// require routes
const routes = require('./routes')
const routesApi = require('./routes-api')

// settings
app.set('appName','Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('combined'));

//rutas
app.use(routes);
app.use('/Api', routesApi);

app.get('*', (req,res) => {
    res.end('Archivo no encontrado');
});

app.listen(3000, () => {
    console.log('servidor funcionando');
    console.log('Nombre de la App', app.get('appName'));
    
});

