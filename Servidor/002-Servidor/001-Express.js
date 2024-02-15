// npm install express
const express = require("express");

let aplicacion = express();

aplicacion.get("/blog",(req,res) => {
    res.send("Hola soy el blog");
})

aplicacion.listen(8080, () =>{
    console.log("visita registrada");
})