/**
 * Desarrollaremos un juego en el que iran pasando X cantidad de animales y debemos mostrar un mensaje cuando el animal capturado sea un 🐉 Dragón
 */
let miVentana;
let i = 0,
    contenedor = document.querySelector('#contenedor'),
    especies = ["🦍","🦌","🐷","🐉","🐯","😽"];
    //especies = ['img/imagen.png','img/imagen2.png','img/imagen3.png']

 //podriamos acceder al contenedor por getElementById
 //let contenedor = document.getElementById('#contenedor');

let intervalo = setInterval(mover, 500);

function mover(){
    //contenedor.innerHTML = `<img src="${especies[i]}" alt="">`;
    contenedor.innerHTML = '<span class="text-center">'+ especies[i]+'</span>';
    i++;
    if(i === especies.length){
        i = 0;
    }
}

document.getElementById("btn-dispara").addEventListener("click", function(){
    let cabecera, 
        mensajito;
    clearInterval(intervalo);
    if( i === 4){
        cabecera = 'GANASTE';
        mensajito = '🎉 Felicidades lo atrapaste';
    } else {
        cabecera = 'FALLASTE';
        mensajito = '😢 Estuviste cerca';
    }

    cambiarModal(cabecera, mensajito);
    miVentana.show();
});

document.getElementById("reiniciar").addEventListener("click", function(){
    location.reload();
});

const opciones = {};
miVentana = new bootstrap.Modal('#miVentana', opciones);

const miCartel = document.getElementById('miVentana');

function cambiarModal(titulo = '', mensaje= ''){
    console.log('->>> '+titulo);
    const miTitulo = miCartel.querySelector('.modal-title');
    miTitulo.textContent = titulo;

    //let miMensaje = miCartel.document.getElementById('mi-mensaje');
    const miMensaje = miCartel.querySelector('.modal-body span');
    miMensaje.textContent = mensaje;
}

//evento disparado al abrir modal
miCartel.addEventListener('show.bs.modal', e => {
    //aqui dentro puedo hacer algo
});
