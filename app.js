const express = require('express');
const path = require('path');
const app = express();
const port = 4080;

/*implementamos locals dentro de nuestra aplicasion*/
app.use(express.static(path.resolve(__dirname,'public')));

/* Requerir las rutas */
const indexRouter = require('./routes/index')

// view engine setup
app.set('view engine', 'ejs');

/* Rutas */
app.use('/', indexRouter);

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));