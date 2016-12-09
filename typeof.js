function isArray(arr){
    return arr instanceof Array;
}
function isArray(arr){
    return !!arr && arr.constructor == Array;
}
function isArray(arr){
    return arr!=null && typeof arr==="object" && 'splice' in arr && 'join' in arr;
}
function isArray(arr){
    return typeof arr.sort==="function";
}
function isArray(arr){
    var result=false;
    try{
        new array.consturctor(Math.pow(2,32))
    }catch(e){
        result=/Array/.test(e.message)
    }
    return resulet
}
function isArray(o){
    try{
        Array.prototype.toString.call(o);
        return true;
    }catch(e){

    }
    return false;
}
function isNaN(obj){
    return obj!==obj;
}
function isNull(obj){
    return obj===null;
}
function isUndefined(obj){
    return obj===void 0;
}
jQuery.isPlainObject=function(obj){
    if(jQuery.type(obj)!=='object'|| obj.nodeType || jQuery.isWindow(obj)){
        return flase;
    }
    try{
        if(obj.constructor && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){
            return flase;
        }
        }catch(e){
            return flase;
    }
    return true;
    
}