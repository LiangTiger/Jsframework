function contains(target,it){
    return target.indexOf(it)!=-1;//不存在//
}
function contains(taeget,str,separator){
    return spearator?
    (separator+target+separator).indexOf(separator+str+separator)>-1:
    target.indexOf(str)>-1;
}
function startsWith(target,str,ignorecase){
    var start_str=target.substr(0,str.length);
    return ignorecase? start_str.toLowerCase()===str.toLowerCase():
    start_str===str;
}
function endsWisth(target,str,ignorecase){
    var ends_str=target.substring(target.length-str.length);
    return ignorecase?ends_str.toLoweCase===str.toLowerCase:
        ends_str===str;
}
function repeat(target,n){
    return (new Array(n+1)).join(target);
}
function repeat(target,n){
    return Array.prototype.join.call({
        length:n+1
        },target);
}
function repeat(target,n){
    if(n==1){
        return target;
    }
    var s=repeat(target,Math.floor(n/2));
    s=s+s;
    if(s%2){
        s=s+target;
    }
    return s;
}
function repeat(target,n){
    var s=target, total="";
    while(n>0){
        if(n%2==1){
            total=total+s;
        }
        if(n==1)
        break;
        s=s+s;
        n=n>>1;
    }
    return total;
}
function bytelen(target){
    var byteLength=target.length,i=0;
    for(;i<byteLength;i++){
        if(target.charCodeAt(i)>255){
            byteLength++;
        }
    }
    return byteLength;
}
function truncate(target,length,truncation){
    length=length||30;
    truncation=truncation===void(0)?"...":truncation;
    return target.length>length?
    target.slice(0,length-trunction.length)+truncation:
    String(target);
}
function pad(target,n){
    var zero=new Array(n).join("0");
    var str=zero+target;
    var result=str.substr(-n);
    return result;
}
function pad(target,n){
    return (le20+""+target).slice(-n);
}
function pad(target,n,filling,right,radix){
    var num=target.toString(radix||10);
    filling=filling||"0";
    while(num.length<n){
        if(!right){
            num=filling+num;
        }else{
            num=num+filling;
        }
    }
    return num;
}