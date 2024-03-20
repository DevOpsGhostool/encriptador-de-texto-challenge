let textoInput =document.getElementById('textoInput').value="";
let codigoCifrar=[
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
];
let textoCifrado = [""];
let unirTextoCifrado=[""];

//Función llamada validarInput que toma un parámetro llamado textoInput
//Se declara una variable llamada regex que contiene una expresión regular
//Esto convierte el valor del campo de entrada de texto a minúsculas
//Se declara una variable llamada texto que contiene el valor actual del campo de entrada de texto
//Se realiza una comprobación utilizando la expresión regular definida anteriormente
//En caso de que el texto no pase la validación, este bloque de código reemplaza todos los caracteres que no son letras minúsculas (a-z) con una cadena vacía
function validarInput(textoInput) { 
    let regex = /^[A-Za-zÿ\u00f1\s]+$/;    
    textoInput.value = textoInput.value.toLowerCase();
    let texto = textoInput.value; 
 
    if (!regex.test(texto)) {
        textoInput.value = texto.replace(/[^a-z]/g, '');
    }else;  
};

function descifrar() {
    //Asigna el valor del campo de entrada de texto con el ID
    //El código reemplaza todas las ocurrencias
    //Llama a una función
    //Desactiva el botón con el ID "descifrar" estableciendo su atributo
    //Está realizando algunas operaciones de cifrado en el texto ingresado por el usuario
    textoInput =document.getElementById('textoInput').value;
    codigoCifrar.map((element) => textoInput = textoInput.replaceAll (element[1],element[0]));
    mostrarTextoCifrado("#ingrese-texto",textoInput);
    document.getElementById('descifrar').setAttribute('disabled','true');
    document.getElementById('cifrar').setAttribute('disabled','true');
};

function cifrar() {
    //Extrae el texto ingresado desde el campo de entrada
    //Divide el texto en palabras individuales y las convierte en un array
    //Itera sobre cada palabra del array
    //Verifica si alguna letra de la palabra está en la lista de vocales/código
    //Itera sobre el array de código/cifrado
    //Si la letra es una vocal, se sustituye por su correspondiente en el código
    //Si no es una vocal, se agrega a un nuevo array llamado textoCifrado
    //Une los elementos del array textoCifrado para formar un único string llamado unirTextoCifrado
    //Elimina el texto que ha sido procesado

    textoInput = document.getElementById('textoInput').value;
    let palabras = textoInput.split("");
      
    for (let i = 0; i < palabras.length; i++) {
        let palabraEnLetras = palabras[i];

        if (codigoCifrar.some(subArray => subArray.includes(palabraEnLetras)) ){
                    
            for (let i = 0; i < codigoCifrar.length; i++) {
                let codigoCifrarSeparado =codigoCifrar[i];
   
                    if (codigoCifrarSeparado.includes(palabraEnLetras)) {
                        cambioCodigoLetra= palabraEnLetras.replace (codigoCifrarSeparado[0],codigoCifrarSeparado[1]);
                        textoCifrado.push(cambioCodigoLetra);
                    }                    
                }
        } 
        else {
            textoCifrado.push(palabraEnLetras);
            }  
    }
    unirTextoCifrado=textoCifrado.join("");
    mostrarTextoCifrado("#ingrese-texto",unirTextoCifrado);
    document.getElementById('cifrar').setAttribute('disabled','true');
    document.getElementById('descifrar').setAttribute('disabled','true');
   document.getElementById("texto-cifrado").setAttribute('style', "height: 400px");
    document.getElementById("boton-copiar").style.display="block";
    document.getElementById("texto-sin-ingresar").style.display="none";
    document.getElementById("ingrese-texto").setAttribute('style', "font-size : 26px");
    document.getElementById("muñeco").style.display="none";
    textoCifrado=[""];

};

function condicionesIniciales(){
    // Este código realiza las siguientes acciones cuando se hace clic en el campo de entrada:
    // - Habilita los botones correspondientes
    // - Limpia el contenido del campo de entrada de texto
    // - Muestra un mensaje inicial en algún lugar de la interfaz
    document.getElementById('cifrar').removeAttribute('disabled');
    document.getElementById('descifrar').removeAttribute('disabled');
    //document.getElementById("textoInput").value="";
};

function mostrarTextoCifrado(elemento, texto) {
    //mostrar el texto cifrado o descifrado
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function copiarTexto() {
   // Este fragmento de código realiza las siguientes acciones:
   // - Obtiene el texto del párrafo identificado como textoDesCifrado
   // - Crea un área de texto temporal para seleccionar y copiar el texto cifrado
   // - Utiliza la API del portapapeles para copiar el texto cifrado
   // - Muestra un mensaje en pantalla indicando que el texto se ha copiado y dónde pegarlo
   // - Elimina el área de texto temporal después de la operación de copia
   // - Vacía el campo de entrada y cambia el marcador de posición por uno que indique dónde pegar el texto
    let copiar = document.getElementById("ingrese-texto");
    let texto = copiar.innerText;
    let textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textarea.value);
    mostrarTextoCifrado("#ingrese-texto","Texto copiado");
    document.body.removeChild(textarea); 
    document.getElementById('textoInput').value = "";
};