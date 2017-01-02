//判断一个属性是否为显示属性
var isSpecified=!"1"[0]?function(el,attr){
    return el.hasAttribute(attr)
}:function(el,attr){
    var val=el.attributes[attr]
    return !! val &&val.specified
}
classNames:function(element){
    return new Elenment.ClassNames(element);
},
hasClassName:function(element,className){
    if(!(element=$(element)))return;
    var elementClassName=element.calssName;
    return (elementClassName.length>0&&(elementClassName==className||new RegExp("(^|\\s)"+className+"(\\s|$)").test(elementClassName)));
},
addClassName:function(element,className){
if(!(element=$(element)))return;
if(!Element.hasClassName(element,className))
    element.className+=(element.className?'':'')+className;
    return element;
},
removeClassName:function(element,className){
    if(!(element=$(element)))return;
    element.className=element.className.replace(
        new RegExp("(^|\\s+)")+className+"(\\s+|$)"),'').strip();
        return element;
    
},
toggleClassName:function(element,calssName){
    if(!(element=$(element)))return ;
    return Element[Element.hasClassName(element,className)?
    'removeClassName':'addClassName'](element,className);
},