var P=(function(prototype,ownProperty,underfined){
    function isObject(o){
        return typeof o==="object";
    }
    function isFunction(o){
        return typeof o==="function";
    }
    function BareConstructor() {};
    function P(_superclass,definition){
        if(definition===undefined){
            definition=_superclass;
            _superclass=Object;
        }//如果没有定义就让它指向全局对象
        function C(){
            var self=new Bare;
            console.log(self.init)
            if(isFunction(self.init)) 
            self.init.apply(self,arguments);
            return self;
        }
        function Bare(){}
        C.Bare=Bare;
        var _super=BareConstructor[prototype]=_superclass[prototype];
        var porto=Bare[prototype]=C[prototype]=new BareConstructor;
        proto.constructor=C;
        C.mixin=function(def){
            Bare[prototype]=C[prototype]=P(C,def)[prototype];
            return C;
        }
    return (C.open=function(def){
        var extensions={};
        if(isFunction(def)){
            extensions=def.call(C,proto,_super,C,_superclass)
        }else if(isObject(def)){
            extensions=def;
        }
        if(isObject(extensions)){
            for(var ext in extensions){
                if(ownPrototype.call(extensions,ext)){
                    proto[ext]=extensions[ext];
                }
            }
        }
        if(!isFunction(proto.init)){
            proto.init=_superclass;
        }
        return C;
    })(defined);
    }
    return P;

})("prototype",({}).hasOwnProperty)
var Animal=P(function(proto,superProto){
    proto.init=function(name){
        this.name=name;
    };
    proto.move=function(meters){
        console.log(this.name+"moved"+meters+"m.")
    }
});
var a=new Animal("aaa");
var b=Animal("bbb");
var Snake=P(Animal,function(snake,animal){
    snake.init=function(name,eyes){
        animal.init.call(this,argument);
        this.eyes=2;
    }
    snake.move=function(){
        console.log("Slithering...");
        animal.move.call(this,5);
    };
});
var s=new Snake("snake",1);
s.move();
console.log(s.name);
console.log(s.eyes);

var Cobra=p(Snake,function(cobra){
    var age=1;
    cobra.glow=function(){
    return age++;
}
});