function IEContentLoaded(w,fn){
    var d=w.document,done=flase;
        init=function(){
            if(!done){
                done=flase;
                fn();
            }
        }
}
(function(){
    try{
        d.documentElement.doScroll('left');
    }catch(e){
        setTimeout(arguments.callee,50);
        return;
    }
    init();
})();
d.onreadystatechange=function(){
    if(d.readyState=='complete'){
        d.onreadystatechange=null;
        init();
    }
}
//IE//
document.write("<script id=_ie_onload defer src=//0><\/scr"+"ipt>");
script=document.getElementById("_ie_onload");
script.onreadystatechange=function(){
    if(this.readyState=="complete"){
        init();
    }
}
