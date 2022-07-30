( function () {
    self = this;
    self.voice = null;
    self.statusplay = 'off';
    //para no repetir el mismo texto
    const $ = selector => document.querySelector( selector );
    // logica de eventos
    self.events = {
        initApplication: function () {
            console.log('arranco...');
            self.events.btnPlay();
            self.events.btnClean();
            var instance = new SiriWave({
                container: document.getElementById("custom-loading"),
                width: 500,
                height: 500,
                style: 'ios9',
                curveDefinition: [
                    {
                      color: "255,255,255",
                      supportLine: true,
                    },
                    {
                      color: "15, 82, 169",
                    },
                    {
                      color: "173, 57, 76",
                    },
                    {
                      color: "48, 220, 155",
                    }],
                ratio: 1.5,
                speed: 0.2,
                amplitude: 2.5,
                frequency: 6,  // frequency (iOS style only)
                color: "#fff", 
                cover: false,//cover container
                autostart: true, //autostart
                pixelDepth: 0.02, //pixel depth
                lerpSpeed: 0.1, //lerp speed
            });
            instance.start();
        },
        btnPlay: function (){
            document.getElementById('btn-speak').addEventListener('click', function () {
                let msg = document.getElementById('text-input').value;
                let statusPlay = 'ok';
                //vamos a validar
                if(msg === ''){
                    statusPlay = 'vacio';
                    self.statusplay === 'on'
                }
                if (speechSynthesis.speaking ){
                    self.statusplay === 'on'
                    statusPlay = 'playing';
                } 
                
                if( self.statusplay === 'off') {
                    self.methods.playSpeak(msg);
                } else {
                    console.log('No reproducir porque '+ statusPlay)
                }
            })
        }, 
        btnClean: function (){
            $('#btn-clean').addEventListener('click', function () {
                $('#text-input').value = '';
            });
        },
        nabigate: function (){
            $('#btn-navigate').addEventListener('click', function () {
                self.methods.navigate();
            });
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

            //empezo a reproducir sonido
            pronunciacion.onstart = function(event) {
                self.methods.openAnimation();
            }
            //finalizo la reproduccion
            pronunciacion.onend = function(event) {
                self.methods.closeAnimation();
            }
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
        },
        openAnimation: function () {
            document.getElementById('custom-loading').style.display = 'block';
        },
        closeAnimation: function () {
            document.getElementById('custom-loading').style.display = 'none';
        }
    }

    self.events.initApplication();
}())