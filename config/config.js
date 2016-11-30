//Aqui declaramos el modulo con la ip y el puerto de mi proyecto.
module.exports = {"IP": process.env.IP || '127.0.0.1', "PORT": process.env.PORT || 3000,
 "color_theme":{
    
  "info":"rainbow",
  "data":"green",
  "error":'zebra',
 "warning":'yellow'
},
"STATIC_PATH": './static'
};