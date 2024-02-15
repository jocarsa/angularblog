// npm install express
const express = require("express");

let aplicacion = express();

aplicacion.get("/blog",(req,res) => {
    res.send(`
             {
                'titulo':'Primera entrada',
                'fecha':'2024-02-15'
            }
             `);
})

aplicacion.listen(8080, () =>{
    console.log("visita registrada");
})