class Alumno{
    constructor(cod, nom,n1,n2,n3,n4){
        this.codigo=cod;
        this.nombre=nom;
        this.nota1=parseFloat(n1);
        this.nota2=parseFloat(n2);
        this.nota3=parseFloat(n3);
        this.nota4=parseFloat(n4);
    }
    
    
    get promedio(){
        this.Promedio= (this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25 ) + (this.nota4 * 0.4);
        return this.Promedio;
    }

    get condicion(){
        if (this.promedio >=12){
            this.mensaje ="APROBADO"
        }else{
            this.mensaje="DESAPROBADO"
        }
        return this.mensaje
    }

    get obsequio(){
        if(this.promedio >=17){
            this.mensaje="Te ganaste una mochila"
        }else{
            this.mensaje="No hay nada"
        }
        return this.mensaje
    }

}
 function calcular(){
    let cod = $("#codigo").val();
    let nom = $("#name").val();
    let n1 = $("#nota1").val();
    let n2 = $("#nota2").val();
    let n3 = $("#nota3").val();
    let n4 = $("#nota4").val();

    alum1 = new Alumno(cod, nom,n1,n2,n3,n4);  
    
    $("#promedio").html("El promedio de "+ alum1.nombre + " es: " + alum1.promedio);
    $("#condicion").html("El Alumno(a) "+ alum1.nombre + " esta: " + alum1.condicion);
    $("#obsequio").html("La promocion " + alum1.obsequio);
}