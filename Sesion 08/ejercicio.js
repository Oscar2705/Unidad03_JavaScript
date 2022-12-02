function enviar(){
        //Regulador de caracteres Sesion 08
        let vali_nombre=/^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/ //Nombre Usuario
        let vali_correo= /([\w\.]+)@([\w\.]+)\.(\w+)/g // Correo
        let vali_celular= /^[9|6|7][0-9]{8}$/ // Celular

        //invoque el input con jquery $("#name").val=="" y la agregue la condicional if
        if($(`#name`).val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            //Incorpore Jquery CSS para dar estilo mas simple
            //EN vez de InnerHTML, con Jquery HTML para agregar texto
            $("#error_nombre").css("color","#da2f2f")
            $("#error_nombre").html("Campos Obligatorios")
            
        } //Condicional para saber si reconoce el caracter
        else if(!vali_nombre.test($(`#name`).val())){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_nombre").css("color","#da2f2f")
            $("#error_nombre").html("Debes agregar caracteres normales")
        }
    
        //Comprobar Apellido
    
        if($(`#last`).val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_last").css("color","#da2f2f")
            $("#error_last").html("Campos Obligatorios")
        }
        else if(!vali_nombre.test($(`#last`).val())){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_last").css("color","#da2f2f")
            $("#error_last").html("Debes agregar caracteres normales")
        }
    
        //Comprobar Correo
    
        if( $(`#email`).val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_email").css("color","#da2f2f")
            $("#error_email").html("Campos Obligatorios")
        }
        else if(!vali_correo.test($(`#email`).val())){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_email").css("color","#da2f2f")
            $("#error_email").html("Debes agregar caracteres con @gmail.com")
        }
    
        //Comprobar Celular
    
        if($(`#phone`).val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_phone").css("color","#da2f2f")
            $("#error_phone").html("Campos Obligatorios")
        }
        else if(!vali_celular.test($(`#phone`).val())){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_phone").css("color","#da2f2f")
            $("#error_phone").html("Debes empezar con 9 y 9 caracteres")
        }
        
         //Comprobar Genero
    
         if($(`#genero`).val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_genero").css("color","#da2f2f")
            $("#error_genero").html("Campos Obligatorios")
        }       
        
        // Comprobar Fecha
        if($("#fecha").val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_fecha").css("color","#da2f2f")
            $("#error_fecha").html("Selecciona una fecha")
        }
        //Comprobar Mensaje
    
        if($(`#mensaje`).val()==""){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_mensaje").css("color","#da2f2f")
            $("#error_mensaje").html("Campos Obligatorios")
        }
        else if(!vali_nombre.test($(`#mensaje`).val())){
            let form=document.getElementById(`form`)
            form.addEventListener("submit", function(event){
                event.preventDefault()
            })
            $("#error_mensaje").css("color","#da2f2f")
            $("#error_mensaje").html("Debes agregar caracteres normales")
        }
    }