var observable=function(val){
    var cur = val;
    function field(neo){
        if(arguments.length){
            if(curr!==neo){
                cur=neo;
            }
        }else{
            return cur;
        }
    }
    field();
    return field;
}
Function.prototype.bind=function(context){
    if(arguments.length<2 && content==void 0)
    return this;
    var _method=this,args=[].slice.call(arguments,1);
    return function(){
        return _method.apply(context,args.concat.apply(args,arguments));
    }
}
var addEvent=document.addEventListener?
function(el,type,fn,capture){
    el.addEventListener(type,fn,capture)
}:
function(el,type,fn){
    el.attachEvent("on"+type,fn.bind(el,event))
}
var bind=function(bind){
    return {
        bind:bind.bind(bind),
        call:bind.bind(bind.call),
        apply:bind.bind(bind.apply)
    }
}(Function.prototype.bind)
var concat=bind.apply([],cancat);
var a=[1,[2,3],4];
var b=[1,3];
var concat=bind.apply([],slice)
var array=slice({
    0:"aaa",
    1:"bbb",
    2:"ccc",
    length:3

});
console.log(array)
function test(){
    var args=slice(arguments)
    console.log(args)
}
var hasOwn=bind.call(Object.prototype.hasOwnProperty);
hasOwn([],"xx")
var hasOwn2=bind.bind(Object.prototype.hasOwnProperty);
hasOwn2([],"xx")()

function curry(fn){
    function inner(len,arg){
        if(len==0)
        return fn.apply(null,arg);
            return function(x){
                return inner(len-1,arg.concat(x));
        };
    }
    return inner(fn.length,[]);
}
function sum(x,y,z,w){
    return x+y+z+w;
}
curry(sum)("a")("b")("c")("c");

function curry2(fn){
    function inner(len,arg){
        if(len<=0)
            return fn.apply(null,arg);
        return function(){
            return inner(len-argument.length,arg.concat(Array.apply([],arguments)))
        }
    }
    return inner(fn.length,[]);
}

