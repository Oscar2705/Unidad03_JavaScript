function enviar(){  

    //Jalamos los inputs al JS
    let usuario=document.getElementById(`usuario`).value
    let nombre=document.getElementById(`nombre`).value
    let correo=document.getElementById(`correo`).value
    let celular=+document.getElementById(`celular`).value
    let contrasena=+document.getElementById(`contrasena`).value
    let contrasena2=+document.getElementById(`contrasena2`).value
    
    //Regulador de caracteres
    let vali_usuario= /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/ //Username
    let vali_nombre=/^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/ //Username

    let vali_correo= /([\w\.]+)@([\w\.]+)\.(\w+)/g //email
    let vali_celular= /^[9|6|7][0-9]{8}$/ // celular
    let vali__contra = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm //pass


    //Realizamos la operacion
    //Condicional para que aceptes solo numero mayores a 4 y menores que 16
    if(usuario.length>=4 && usuario.length<=16){

    } else{
        document.getElementById("label").style.color = "#da2f2f";
        document.getElementById("mensaje_error").innerHTML=`El usuario tiene que ser de 4 digitos a 16 digitos`
    }

    //VALIDACION DE CARACTER PARA USUARIO---------------------------------------
    if(!vali_usuario.test(usuario)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("label").style.color = "#da2f2f";
        document.getElementById("mensaje_usuario").innerHTML=`El usuario tiene que contener numeros, letras y guion bajo.`
    } 

     //VALIDACION DE CARACTER PARA NOMBRE---------------------------------------
    if(!vali_nombre.test(nombre)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })

        document.getElementById("mensaje_nombre").innerHTML=`El nombre debe reservar palabras normales Minus Mayusc.`
    } 

    //VALIDACION DE CARACTER PARA CORREO---------------------------------------
      if(!vali_correo.test(correo)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("mensaje_correo").innerHTML=`El correo debe acabar con @gmail.com`
    } 

     //VALIDACION DE CARACTER PARA CELULAR---------------------------------------
     if(!vali_celular.test(celular)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("mensaje_celular").innerHTML=`El numero debe ser de 9 digitos y empezar con 9`
    } 
    //VALIDACION DE CARACTER CONTRASEÑA------------------------------------------

    if(!vali__contra.test(contrasena)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
            
        })
        document.getElementById("mensaje_contrasena").innerHTML=`El password no cumple con los caracteres`
    } 
    
    //Contraseña--------------------------------------------------------------------
    if(contrasena!=contrasena2){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
           
        })
        document.getElementById("repetir").style.color = "#da2f2f";
        document.getElementById("mensaje_contrasena2").innerHTML=`Ambas contraseñas deben ser iguales`
    } 

    //REVISAR QUE TODO LOS INPUTS ESTEN COMPLETO
    if((usuario == "") || (nombre == "") ||(correo == "") || (celular == "") || (contrasena == "") || (contrasena2 == "")){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
           
        })
        document.getElementById("mensaje_final").innerHTML=`Debes rellenar todos los campos`
    }
  
}
function limpiar(){ 
    document.getElementById(`usuario`).innerHTML=``
    document.getElementById(`nombre`).innerHTML=``
    document.getElementById(`correo`).innerHTML=``
    document.getElementById(`celular`).innerHTML=``
    document.getElementById(`contrasena`).innerHTML=``
    document.getElementById(`contrasena2`).innerHTML=``

    document.getElementById(`mensaje_usuario`).innerHTML=``
    document.getElementById(`mensaje_error`).innerHTML=``
    document.getElementById(`mensaje_nombre`).innerHTML=``
    document.getElementById(`mensaje_correo`).innerHTML=``
    document.getElementById(`mensaje_celular`).innerHTML=``
    document.getElementById(`mensaje_contrasena`).innerHTML=``
    document.getElementById(`mensaje_contrasena2`).innerHTML=``
    document.getElementById(`mensaje_final`).innerHTML=``

    //COLOR
    document.getElementById("label").style.color = "black";
    document.getElementById("repetir").style.color = "black";
    
}