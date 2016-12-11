function getBasePath(){
    var nodes=focument.getElementsByTagName("script");
    var node=nodes[nodes.length-1];
    var src=document.querySelector?node.src:node.getAttribute("src",4);
    return src;
}
function getBasePath(){
    var nodes=document.getElementsByTagName("script");
    if(window.VBarray){
        for(var i = 0,node;node=node[i++];){
            if(node.readyState==="interactive"){
                break;
            }
        }
    }else{
        node=node[node.length-1];
    }
    var src=document.querySelector?node.src:node.getAttribute("src",4);
    return src;
}
function getBasePath(){
    try{
        a.b.c()
    }catch(e){
        if(e.fileName){
            return e.fileName;
        }else if(e.sourceURL){
            return e.sourceURL;
        }
    }
    var nodes =document.getElementsByTagName("script");
    if(window.VBarray){
        for(var i= nodes.length,node;node=nodes[--i];){
            if(node.readyState==="interactive"){
                break;
            }
        }
    }else{
        node=nodes[nodes.length-1];
    }
    var src=document.querySelector?node.src:node.getAttribute("src",4);
    return src;
}
