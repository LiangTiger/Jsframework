function Data(){
    this.cache
}
Data.uid=1;
Data.prototype={
    locker:function(owner){
        var ovalueOf,
        unlock=owner.valueOf(Data);
        if(typeof unlock !=="string"){
            unlock=jQuery.expando+Data.uid++;
            ovalueOf=owner.valueOf;
            Object.defineProperty(owner,"valueOf",{
                value:function(pick){
                    if(pick===Data){
                        return unlock;
                    }
                    return ovalueOf.apply(owner);
                }
            });
        }
        if(!this.cache[unlock]){
            this.cache[unlock]={};

        }
        return  unlock;
    },
    set:function(owner,data,value){
        var prop,cache,unlock;
        if(typeof data==="string"){
            cache[data]=value;
        }else{
            if(Jquery.isEmptyObject(cache)){
                cache=data;
            }else{
                for(prop in data){
                    cache[prop]=data[prop];
                }
            }
        }
        this.cache[unlock]=cache;
        return this;
    },
    get:function(owner,key){
        var cache=this.cache[this.locker(owner)];
        return key===undefined?cache:cache[key];
    },
    access:function(owner,key,value){
        if(key===undefined || ((key && typeof key==="string") && value===undefined)){
            return this.get(owner,key);
        }
        this.set(owner,key,value);
        return value !==undefind? value:key;
    },
    hasData:function(owner){
        return !jQuery.isEmptyObject(this.cache[this.locker(owner)]);
    },
    discard:function(owner){
        delete this.cache[this.locker(owner)];
    }
};
var data_user,data_priv;
function data_discard(owner){
    data_user.discard(owner);
    data_priv.discard(owner);
}
data_user=new Data();
data_priv=new Data();
jQuery.extend=({
    expando:"jQuery"+(core_version+Math.random()).replace( /\D/g,""),
    acceptData:function(elem){
        return true;
    },
    hasData:function(elem){
        return data_user.hasData(elem);
    },
    data:function(elem,name,data){
        return data_user.access(elem,name,data);
    },
    removeData:function(elem,name){
        return data_user.remove(elem,name);
    },
    _data:function(elem,name,data){
        return data_priv.access(elem,name,data);
    },
    _removeData:function(elem,name){
        return data_priv.remove(elem,name);
    }
})
































