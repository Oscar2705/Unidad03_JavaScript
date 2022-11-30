function enviar(){  

    //Jalamos los inputs al JS
    let usuario=document.getElementById(`usuario`).value
    let nombre=document.getElementById(`nombre`).value
    let correo=document.getElementById(`correo`).value
    let celular=+document.getElementById(`celular`).value
    let contrasena=+document.getElementById(`contrasena`).value
    let contrasena2=+document.getElementById(`contrasena2`).value
    
    //Regulador de caracteres
    let vali_usuario= /^[a-zA-Z0-9\_\-]{4,16}$/ //Username
    let vali_nombre=/^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/ //Username

    let vali_correo= /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/g //email
    let vali_celular= /^[9|6|7][0-9]{8}$/ // celular
    // let vali_contrasena= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm // contraseña

    //REVISAR QUE TODO LOS INPUTS ESTEN COMPLETO
    if((usuario.length>=4) || (nombre.length>=4) ||(nombre.length>=4) || (celular.length>=4) || (contrasena.length>=4) || (contrasena2.length>=4) ){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
           
        })
        document.getElementById("mensaje_final").innerHTML=`Debes rellenar todos los campos`
    }
   


    //Realizamos la operacion
    //Condicional para que aceptes solo numero mayores a 4 y menores que 16
    if(usuario.length>=4 && usuario.length<=16){

    } else{
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
            // limpiar()
        })

           document.getElementById("mensaje_usuario").innerHTML=`El usuario tiene que ser de 4 digitos a 16 digitos y solo puede contener numeros, letras y guion bajo.`
    }

    //VALIDACION DE CARACTER PARA USUARIO---------------------------------------
    if(vali_usuario.test(usuario)===true){

    } else{
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
           
        })
        document.getElementById("mensaje_usuario").innerHTML=`El usuario tiene que ser de 4 digitos a 16 digitos y solo puede contener numeros, letras y guion bajo.`
    }

     //VALIDACION DE CARACTER PARA NOMBRE---------------------------------------
    if(vali_nombre.test(nombre)===true){

    } else{
        document.getElementById("mensaje_nombre").innerHTML=`El nombre debe reservar palabras normales Minus Mayusc.`
    }

    //VALIDACION DE CARACTER PARA CORREO---------------------------------------
      if(vali_correo.test(correo)===true){

    } else{
        //    alert("El correo debe seguir las reglas @gmail.com o @hotmail.com")
    }

     //VALIDACION DE CARACTER PARA CELULAR---------------------------------------
     if(vali_celular.test(celular)===true){

    } else{
        //    alert("El numero debe ser de 9 digitos y empezar con 9")
    }

     //VALIDACION DE CARACTER PARA CONTRASEÑA---------------------------------------
    //  if(vali_contrasena.test(contrasena)===true){

    // } else{
    //        alert("La contraseña debe ser normal")
    // }

    //Contraseña--------------------------------------------------------------------
    if(contrasena===contrasena2){

    } else{
           document.getElementById("mensaje_contrasena").innerHTML=`Ambas contraseñas deben ser iguales`
    }

    
}
function limpiar(){
    let usuario=document.getElementById(`usuario`).value
    let nombre=document.getElementById(`nombre`).value
    let correo=document.getElementById(`correo`).value
    let celular=+document.getElementById(`celular`).value
    let contrasena=+document.getElementById(`contrasena`).value
    let contrasena2=+document.getElementById(`contrasena2`).value
    
    document.getElementById(`usuario`).innerHTML=``
    document.getElementById(`nombre`).innerHTML=``
    document.getElementById(`correo`).innerHTML=``
    document.getElementById(`celular`).innerHTML=``
    document.getElementById(`contrasena`).innerHTML=``
    document.getElementById(`contrasena2`).innerHTML=``

    document.getElementById(`mensaje_u`).innerHTML=``
    document.getElementById(`mensaje_c`).innerHTML=``
    
}