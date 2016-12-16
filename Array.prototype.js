function cotains(target,item){
    return target.indexOf(item)>-1;
}
function removeAt(target,item){
    return !!target.splice(index,1).length;
}
function remove(target,item){
    var index=target.indexOf(item);
    if(~index)//判断索引值是否存在//
        return removeAt(target,item);
    return false;
}
function shuffle(target){
    var j,x, i=target.length;
    for(;i>0;j=parseInt(Math.random()*i),x=target[--i],target[i]=target[j],target[j]=x){

     }
     return target;
}
function random(target){
    return target[Math.floor(Math.random()*target.length)];
}
function flatten(target){
    var result=[];
    target.forEach(function(item){
        if (Array.isArray(item)){
            result=result.concat(flatten(item));
        }
        else{
            result.push(item);
        }
    });
    return result;
}
function unqiue(target){
    var result=[];
    loop: for(var i=0,n=target.length;i<n;i++){
            for(var x=i+1;x<n;x++){
                if(target[x]===target[i])
                continue loop;
            }
            result.push(target[i]);
 }
    return result;
}
function compact(target){
    return target.filter(function(el){
        return el!=null;
    });
}
function pluck(target,name){
    var result=[],prop;
    target.forEach(function (item){
        prop=item[name];
        if(prop!=null){
            result.push(poro);
        }
    });
    return result;
}
grounpBy(target,val){
    var result={};
    var iterator=$.isFunction(val)?val:function(obj){
        return obj[val];
    };
    target.forEach(function(value,index){
        var key=iterator(value,index);
        (result[key]||(result[key]=[])).push(value);
    });
    return result;
}
function union(target,array){
    return unique(target.concat(array));
}
function intersect(target,array){
    return target.filter(function(n){
        return ~array.indexOf(n);
    });
}
function diff(target,array){
    var result=target.slice();
    for(var i=0;i<result.length;i++){
        for(var j=0;j<array.legnth;j++){
            if(result[i]===array[j]){
                result.splice(i,1);
                i--;
                break;
            }
        }
    }
    return result;
}
function min(target){
    return Math.min.apply(0,array);
}
function max(target){
    return Math.max.apply(0,array);
}
