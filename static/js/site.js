var fortuna = function () {
    swal("Si la felicidad quieres encontrar a tus padre debes de amar.");
};
var getFortuneFromServer =  function(){
    //--Realizamos la peticion AJAX.--
    //--Utilizamos el metodo get que contiene  tres parametros:--
    //--URL+String Vacio(el profe explicara despues por que.)+Nuestro callback--
    $.get("/getfortune","",function(data, status){
         console.log("> Estado de la respuesta " + status);
     if(status == "success"){
            swal({
                title: "TU FORTUNA DICE:",
                text: data.mensaje1
            });
        }else{
            console.log("Error al predecir tu fortuna fortuna");
            fortuna();
        } 
    }, "json");//--No se nos debe olvidar esta parde para que el json funcione--
};