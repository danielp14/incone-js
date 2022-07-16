( function () {
    self = this;
    self.voice = null;
    // logica de eventos
    self.events = {
        initApplication: function () {
            console.log('arranco...');
            self.events.btnPlay();
        },
        btnPlay: function (){
            document.getElementById('btn-speak').addEventListener('click', function () {
                let msg = document.getElementById('text-input').value;
                let statusPlay = 'ok';
                //vamos a validar
                if(msg === ''){
                    statusPlay = 'vacio';
                }
                if (speechSynthesis.speaking ){
                    statusPlay = 'playing';
                } 
                
                if( statusPlay == 'ok') {
                    self.methods.playSpeak(msg);
                } else {
                    console.log('No reproducir porque '+ statusPlay)
                }
            })
        }
    }
    //logica de las vistas
    self.views = {
        
    }
    
    self.methods = {
        playSpeak: function ( msg ) {

            if ( !('speechSynthesis' in window) ){
                console.log('Servicio de voz no disponible');
                return;
            }

            if (self.voice === null){
                self.methods.getVoices();
            }

            const pronunciacion = new SpeechSynthesisUtterance(msg);
            pronunciacion.voice = self.voice;
            speechSynthesis.speak(pronunciacion);

        },
        getVoices: function (event, idioma = "es") {
            const voces = speechSynthesis.getVoices().filter(v=>v.lang.startsWith(idioma));
            if (voces .length > 0){
                self.voice = voces[5];
            } else {
                //idioma no español
                if (idioma.length == 5){
                    self.methods.getVoices(event, idioma.substring(0,2))
                }
            }
        }
    }

    self.events.initApplication();
}())