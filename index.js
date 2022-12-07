const express = require('express');

const categoriaController = require('./controller/CategoriaController');

const pizzaController = require('./controller/PizzaController');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',categoriaController);

app.use('/',pizzaController);





app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});