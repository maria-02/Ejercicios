class Luminaria {
    constructor(codigo, calle, estado) {
    this.codigo = codigo; // es alfanumérico
    this.calle = calle;
    this.estado = estado; // estado es un entero entre 1 y 5
    }
    toString(){
        //Definir el método toString en Luminaria para que retorne su código en mayúsculas y entre
        //paréntesis la indicación de “bien” si el estado es 5, “regular” si es 2, 3 o 4 y 
        //“malo” si es 1. 
    // 2b – A COMPLETAR
    let estadito=0
    if(this.estado==5){
        estadito="bien"
    }else if(this.estado>1 && this.estado<=4){
        estadito="regular"
    }
    else if(this.estado==1){
        estadito="malo"
    }
    return this.codigo.toUpperCase() + " " + estadito ;
    }
    

   }
   class Sistema {
    constructor() {
    this.listaLuminarias = [];
    }
    agregarLuminaria(codigo, calle, estado){
        //Completar en la clase Sistema el método agregarLuminaria (codigo, calle, estado) que da de
        //alta la nueva luminaria con los datos recibidos.
        // 2c - A COMPLETAR
        let nueva = new Luminaria(codigo, calle, estado);
        this.listaLuminarias.push(nueva);
       
 
   }
    consultaCalles(unaCalle) {
        //Completar en la clase Sistema el método consultaCalles(calle) que retorna un array indexado
        //conteniendo en cada posición una luminaria que esté en la misma calle recibida de parámetro. 
        //Debe estar ordenado por
        //estado creciente/código creciente.
   // 2d - A COMPLETAR
    
    let nuevo=[];
    for(let i=0;i<this.listaLuminarias.length;i++){
        if(i==unaCalle){
        for(let prop in this.listaLuminarias){
            nuevo.push(prop)
        }
    }

    }
    return nuevo.sort(function(a,b){let dif = a.estado- b.estado;
        if (dif==0){
        dif = a.codigo.toUpperCase().localeCompare(b.codigo.toUpperCase());
        }
        return dif;}
        );
        }
    }

    function agregar(){
        let codigo = document.getElementById("idCodigo").value;
        let calle = document.getElementById("idCalle").value;
        let estado = parseInt(document.getElementById("idEstado").value);
        if (!document.getElementById("idFormulario").reportValidity() ){
        alert("datos incorrectos");
        }
        else {
        let lista = document.getElementById("idLista");
        lista.innerHTML = "";
        let res = sis.consultaCalles(calle);
        for(let el of res){
        let nodo = document.createElement("li");
        let nodoT = document.createTextNode(el);
        lista.appendChild(nodo);
        nodo.appendChild(nodoT);
        }
        }
        }