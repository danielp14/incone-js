
    function validateCard( valor ){
        if(valor.length >= 8 ) {
            console.log('obtenemos tipo de tarjeta');
            getCardServer(valor)
        } else {
            console.log('necesitamos mas numeros')
        }
    }
