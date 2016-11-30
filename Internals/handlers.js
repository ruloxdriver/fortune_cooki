var path = require('path'),
     fs = require('fs'),
     fortune = require('./fortune');
//--Creando funciones(Manejadores)--
var _getAuthor = function(req,res){
    res.end("Autor:Raul Loeza Arevalo.");
};
/* 
        function fortuna(){
             var fortuna =["si la felicidad deseas encontrar a tu admirador debes amar","Se feliz y no te deprimas por nada,vive plenamente",
      "Esdudia , disfruta, vive", "Se feliz, sin preocuparte por lo malo  que pueda pasar",
      "una sonrisa es la forma mas facil de afrontar las situaciones dificiles incluso si es falsa",
      "Jamas retrocedas a tu camino, lucha por lo que quieres"];
      var rand = fortuna[Math.floor(Math.random()* fortuna.length)];
      return rand;
}*/
    //--Recordemos que mis estamos trabajando de la forma no bloqueante.--
    var _getFortune = function (req,res){
    console.log('>La fortuna fue solicitada...');
    //--------------------------------------------------------------------    
    fortune.getFortune(function(fortunePaperObj){
    //--En esta parte configuramos la aplicacion para que reconosca cualquier tipo de archivo.
    res.writeHead(200,{
        "Content-Type" : "application/json"
    });
    console.log(`>Contestando: ${fortunePaperObj}`);
    res.end(fortunePaperObj);
    });
};

 


 


// ----
// objeto manejador.

var handler = {};
// Registro de manejadores en el objeto manejador. 
handler["/getauthor"] = _getAuthor;
module.exports = handler;

handler["/getfortune"] = _getFortune;

 