
// Alfredo Gonzales de Categoria A y con 1-3 a;os de servicio recibira:
// Sueldo Basico: S/ 3,400
// Bonificacion por a;os de servicio: S/ 510
// Sueldo Neto: S/ 3,128 (80% del sueldo bruto total)

function resultado(){
    let name=document.getElementById(`name`).value
    let horas=+document.getElementById(`hora`).value
    let categoria=document.getElementById(`listacat`).value
    let años=+document.getElementById(`años`).value

    let sueldob

    if(categoria=="A" ){
        tarifa=40
    }else if(categoria=="B"){
        tarifa=35
    } else if(categoria=="C"){
        tarifa=30
    }
    sueldob=horas*tarifa;
    document.getElementById("resultado").innerHTML=`El usuario ${name} tiene un sueldo basico de ${sueldob}`


    if(años>=1 && años <=3){
        bon=0.15
    }else if(años>=4 && años <=7){
        bon=0.20
    }else if(años>=8 && años <=12){
        bon=0.30
    } else if(años>=13){
        bon=0.35
    }
    bonificacion=sueldob*bon
    sueldot=sueldob+bonificacion

    sueldobruto=sueldot*0.80

    
    document.getElementById("bon").innerHTML=`La bonificacion por años de servicio es ${bonificacion}`
    document.getElementById("sueldof").innerHTML=`El sueldo total es ${sueldot}`
    document.getElementById("sueldob").innerHTML=`Y el sueldo Bruto del 80% es ${sueldobruto}`
}
function limpiar(){
    let name=document.getElementById(`name`).value
    let horas=+document.getElementById(`hora`).value
    let categoria=document.getElementById(`listacat`).value
    let años=+document.getElementById(`años`).value
    
    document.getElementById("resultado").innerHTML=``
    document.getElementById("bon").innerHTML=``
    document.getElementById("sueldof").innerHTML=``
    document.getElementById("sueldob").innerHTML=``
}