const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();

mongoose.connect('<link para mongobd>',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// GET, POST, PUT, DELETE 
// req.query acessar parametros
// req.params para acessar route paramns put para editar 
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes);
// express le essas instruções sequenciamente
app.listen(3333);
