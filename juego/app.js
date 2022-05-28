/**
 * Desarrollaremos un juego en el que iran pasando X cantidad de animales y debemos mostrar un mensaje cuando el animal capturado sea un 🐉 Dragón
 */

let i = 0,
    contenedor = document.querySelector('#contenedor'),
    especies = ["🦍","🦌","🐷","🐉","🐯","😽"];
    //especies = ['img/imagen.png','img/imagen2.png','img/imagen3.png']
    console.log(especies);

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
    clearInterval(intervalo);
    console.log(i);
    if( i === 4){
        miVentana.show();
        //alert("🎉 Felicidades lo atrapaste");
    } else {
        miVentana.show();
        //alert("😢 Estuviste cerca");
    }
});

document.getElementById("reiniciar").addEventListener("click", function(){
    location.reload();
});

// Continuara ...

const opciones = {};
const miVentana = new bootstrap.Modal('#miVentana', opciones)