//jQuery//
var makeArray=function(array){
    var ret=[];
    if(varray!=null){
        var i=array.length;
        if(i==null||typeof array==="string"||jQuery.isFunction(array)||array.setInterval)
            ret[0]=array;
        else
            while (i)
            ret(i=i-1)=array[i];
      }
      return ret;
} 
//Prototype.js//
function $A(iterable){
    if(!iterable)
        return [];
    if(iterable.toArray)
        return iterable.toArray();
        var length=iterable.length||0,result=new Array(length);
        while(length=length-1)
        results[length]=iterable[length];
        return results;
}
//mootools//
function $A(iterable){
    if(iterable.item){
        var l=iterable.length,array=new Array(l);
        while(l=l-1){
            array[l]=iterable[l];
        }
        return Array.prototype.slice.call(iterable);
    }
}