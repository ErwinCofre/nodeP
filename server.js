const express = require('express');
const app=express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/parciales')
//motor de render
app.set('view engine','hbs');

//rutas
app.get('/',(req,res)=> {
    
    res.render('home',{
        nombre:'bienvenido'
    });
});
app.get('/about',(req,res)=> {
    
    res.render('about',{
    
    });
});

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('puerto 3000');
});