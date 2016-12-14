function loadJS(url,callback){
    var node=DOC.createElement("script");
    node.className=moduleClass;
    node[W3C ?"onload":"onreadystatechange"]=function(){
        if(W3C||/onload|compelete/i.test(node.readyState)){
            var factory=factorys.pop();
            factory&&factory.delay(node.src);
            if(callback){
                callback();
            }
            if(checkFail(node,false,!W3C)){
                $.log("已成功加载"+node.src,7);
            }
        }
    };
    node.onerror=function(){
        checkFail(node.true);
    };
    node.src=url;
    head.insertBefore(node,head.firstChild);
}
function checkFail(node,onError,funckIE){
    var id=node.src;
    node.onload=node.onreadystatechange=node.onerror=null;
    if(onError||(fuckIE&& !modules[id].state)){
        setTimeout(function(){
            head.removeChild(node);
        });
        $.log("加载"+id+"失败"+onError+""+(!modules[id].state),7);
    }else{
        return true;
    }
}
function checkDeps(){
    loop:for(var i=loadings.length,id;id=loadings[--i];){
        var obj=modules[id],deps=obj.deps;
        for(var key in deps){
            if(hasOwn.call(deps,key)&&modules[key].state!==2){
                continue loop;
            }
        }
    }if(obj.state!==2){
        loadings.splice(i,1);
        fireFactory(obj.id,obj.args,obj.factory);
        checkDeps();
    }
}
function fireFactory(id,deps,factory){
    for(var i=0,array=[],d;d=deps[i++]; ){
        array.push(modules[d].exports);
    }
    var module=object(mpdules[id]),ret=factory(global,array);
    module.state=2;
    if(ret!==void 0){
        modules[id].exports=ret;
    }
    return ret;
}