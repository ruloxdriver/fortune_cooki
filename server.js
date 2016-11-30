    var http = require('http');
    var colors = require('colors');
    var fs = require('fs');
    var mime = require('mime');
    var path = require('path');
    var staticServer = require('./Internals/static-server.js');
    var handlers = require('./Internals/handlers');
//--cargando mis configuraciones--
    var config = require('./config/config.js');
    var IP = config.IP;
    var PORT = config.PORT;
//--Tema de mis colores--
//--color_theme.setTheme(config.color_theme);--
    var server = http.createServer(function (req, res) {
//--Extrayendo el path de la URL--
    var urlpath = req.url;
//--Normalizamos el path en caso de que ningun archivo sea requerido--  
    if(urlpath==="/"){
        urlpath =("/index.html");
    }
     if (typeof(handlers[urlpath]) === "function"){
         handlers[urlpath](req,res);
     }else {
//--Se llama al servidor estatico--
        staticServer.serve(urlpath,res);
     }
});
server.listen(PORT, IP, function () {
    console.log(`> Server working @http://${IP}:${PORT}/`)
});