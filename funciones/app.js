(function (){
    self = this;
    
    self.events = {
        initApplication: function(){
            setTimeout(function(){
                self.methods.getTextNode('pepito');
            },3000)
        }
    }

    self.views = {
        
    }

    self.methods = {
        convertUpperCase: function (text){
            let nuevo = text.toUpperCase();
            return nuevo;
        },
        getTextNode: function ( target ){
            let temp = document.getElementById(target).innerHTML;
            let enMayuscula = self.methods.convertUpperCase(temp)
            self.methods.newValue(target, enMayuscula);
        },
        newValue: function (target, newvalue){
            document.getElementById(target).innerHTML = newvalue;
        }
    }

    self.events.initApplication();
}() )