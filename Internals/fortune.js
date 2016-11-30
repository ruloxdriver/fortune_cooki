//--Cargo el modulo de mongo que me permite la conexion--
var mongodb = require("mongodb");
//--Cargo el cliente --
var mongoClient = mongodb.MongoClient;
//--Exporto mi modulo--
module.exports = {
    "getFortune" : function(cb){
        // --En este proceso se conecta a localhost con mi puerto declarado anteriomente--
        // --("ip+puerto+el nombre de mi base de datos")
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",
        function(err, db){
            if(err){
                console.log(">Error al intentar conectarme" +
                " a la base de datos:"+
                " mongodb://127.0.0.1:27017/fortuneapp");
                var fortunePaper = {
                    "mensaje1":
                    "La sabiduria te da porder y el poder me da la libertad."
                };
                //--Convertir la fortuna a un string.--
                var fortunePaperResponse = JSON.stringify(fortunePaper);
                //--Ejecuto mi callback y le paso como parametro mi string--
                cb(fortunePaperResponse);
            }else{
                //--Mando a llamar  mi coleccion--
                var papersCollection = 
                db.collection("papers");
                //--Saco de mi coleccion todos mis documentos--
                var objetoRestultado = 
                papersCollection.find({});
                //--Genero mi arreglo para poder hacer mis mensajes aleatorios--
                objetoRestultado.toArray(function(err, papers){
                    var randomIndex = 
                    Math.round(Math.random(0)* papers.length);
                    console.log("> RandomIndex calculated: " + randomIndex);
                    var fortunePaperResponse = 
                    JSON.stringify(papers[randomIndex]);
                    db.close()//--Termino mi conexion--
                    //--Ejecuto mi callback con su parametro.--
                    console.log(">Mi fortuna es: " + fortunePaperResponse);
                    cb(fortunePaperResponse);
                });
            }
        });
    }
};

