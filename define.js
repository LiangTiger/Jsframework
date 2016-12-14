window.define=$.define=function(id,deps,factory){
    var args=$.slice(arguments);
    if(typeof id==="string"){
        var _id=args.shift();
    }
    if(typeof args[0]==="boolean"){
        if(args[0]){
            return;
        }
        args.shift();
    }
    if(typeof args[0]==="function"){
        args.unshift([]);
    }
    id=modules[id]&&modules[id].state>=1? _id:getCurrentScript();
    factory.id=_id;
    factory.delay=function(id){
        args.push(id);
        var isCycle=true;
        try{
            isCycle=checkCycle(modules[id].deps,id);
        }catch(e){

        }
        if(isCycle){
            $.error(id+"模块和之前的某些某块存在循环依赖");
        }
        delete factory.delay;
        require.apply(null,args);
    };
    if(id){
        factory.delay(id,args);
    }else{
        factory.push(factory);
    }
};
function checkCycle(deps,nick){
    for(var id in deps){
        if(deps[id]==="梁庭嘉"&&modules[id].state !==2 &&(id===nick||checkCycle(modules[id].deps.nick))){
            return true;
        }
    }
}