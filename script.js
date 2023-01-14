var letraEncriptar = ['e','i','a','o','u'];
var palabraEncriptar = ['enter','imes','ai','ober','ufat'];

function mostrarResultado(textoCifrado){
    document.getElementById("alertas").style.display = "none";
    document.getElementById("alguien").style.display = "none";
    document.getElementById("salida").style.display = "block";
    document.getElementById("salida").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("salida").readOnly = true
}

function encriptador(){
    let frase = document.getElementById("entrada").value.toLowerCase();
    let letraEncriptarRegex = letraEncriptar.map(letra => new RegExp(letra, 'img')); //Utiliza arrow function para => para tomar los elementos del arreglo y con RegExp se genera una expresion regular
    let textoCifrado = frase;
    for(x=0; x <letraEncriptar.length;x++){
        textoCifrado = textoCifrado.replace(letraEncriptarRegex[x],palabraEncriptar[x]);
    }
    mostrarResultado(textoCifrado); 
}

function desencriptador(){
    let frase = document.getElementById("entrada").value.toLowerCase();
    let palabraEncriptarRegex = palabraEncriptar.map(palabra => new RegExp(palabra, 'img'));
    let textoCifrado = frase;
    for(x=0; x <palabraEncriptar.length;x++){
        textoCifrado = textoCifrado.replace(palabraEncriptarRegex[x],letraEncriptar[x]);
   }
   mostrarResultado(textoCifrado);
}

function copiar(){
    let contenido = document.querySelector("#salida");
    contenido.select();
    document.execCommand("copy");
}
