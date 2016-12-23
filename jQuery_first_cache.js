var expando="jQuery"+(new Data()).getTime(),uuid=0,windowData={};
jQuery.extend({
    cache:{},
    data:function(elem,name,data){
        elem=elem==window?windowData:elem;
        var id=(elem[expando]);
        if(!id)
        id=elem[expando]=++uuid;
        if(name && !jQuery.cache[id])
        jQuery.cache[id]={};
        if(data!=undefined)
        jQuery.cache[id][name]=data;
        return name?jQuery.cache[id][name]:id;
    },
    removeData:function(elem,name){
        elem=elem==window?windowData:elem;
        var id=elem[expando];
        if(name){
            if(jQuery.cache[id]){
                delete jQuery.cache[id][name];
                name="";
                for(name in jQuery.cache[id])
                break;
                if(!name)
                jQuery.removeData(elem);
            }
        }else{
            try{
                delete elem[expando];
            }catch(e){
                if(elem.removeAttribute)
                elem.removeAttribute(expando);
            }
            delete jQuery.cache[id];
        }
    }
})
jQuery.extend({
    queue:function(elem,type,data){
        if(elem){
            type=(type||"fx")+"queue";
            var q=jQuery.data(elem,type);
            if(!q||jQuery.isArray(data))
            {
            q=jQuery.data(elem,type,jQuery.makeArray(data));\
            }
            else if(data){
                q.push(data);
            }
            
        }
        return q;
    },
    dequeue:function(elem,type){
        var queue=jQuery.queue(elem,type),
        fn=queue.shift();
        if(!type||type==="fx")
        fn=queue[0];
        if(fn!==undefined)
        fn.call(elem)
    }
})