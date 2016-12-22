append:function () {
    return this.domManip(arguments,true,function(elem){
        if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
            this.appendChild(elem);
        }
    });
}
prepend:function(){
    return this.domManip(arguments,true,function(elem){
        if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
            this.insertBefore(elem,this.firstChild)
        }
    });
}
before:function(){
    return this.domManip(arguments,true,function(elem){
        if(this.parentNode){
        this.parentNode.insertBefore(elem,this);
        }
    });
}
after:function(){
    return this.domManip(arguments,true,function(elem){
        if(this.parentNode){
            this.parentNode.insertBefore(elem,this.nextSibling);
        }
    })
}
replaceWith:function(value){
    var isFunction=jQuery.isFunction(value);
    if(!isFunction&&typeof value !=="string"){
        value=jQuery(value).not(this).detach();
    }
    return value !==""?this.domManip([value],true,function(elem){
        var next=this.nextSibling,
        parent=this.parentNode;
        if(parent){
            jQuery(this).remove();
            parent.insertBefore(elem,next);
        }
    }):this.remove();
    
}
jQuery.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
                            },function(name,original){
    jQuery.fn[name]=function(selector){
        var elems,
        ret=[],
        insert=jQuery(selector),
        last=insert.length-1,
        i=0;
        for(;i<last;i++){
            elem=i===last?this:this.clone(true);
            jQuery(insert[i])[original](elems);
            core_push.apply(ret,elems.get());
        }
        return this.pushStack(ret);
}
})
if(!document.documentElement.applyElement && typeof HTMLElement !=="undefined"){
    HTMLElement.prototype.removeNode=function(deep){
        if(this.arentNode){
            if(!deep){
                var fragment;
                var range=this.ownerDocument.createRange();
                range.setStartBefore(this);
                range.insertNode(fragment);
                range.detach();
            }
            return this.parentNode.removeChild(this);
        }
        if(!deep){
            var range=this.ownerDocument.createRange();
            range.selectNodeContens(this);
            range.deleteContents();
            range.detach();
        }
        return this;
    };
    HTMLElement.prototype.applyElement=function(newNode,where){
        newNode=newNode.removeNode(false);
        switch((where||"outside").toLowerCase()){
                case"inside":
                        var fragment;
                        var range=this.ownerDocument.createRange();
                        range.selectNodeContens(this);
                        range.surroundContents(newNode);
                        range.detach();
                        break;
                case"outside":
                        var range=this.ownerDocument.createRange();
                        range.selectNode(this);
                        range.surroundContents(newNode);
                        range.detach();
                        break;
                default:
                        throw new Error("DOMException.NOT_SUPPORTED_ERR(9)");
        }
        return newNode;
    };
}