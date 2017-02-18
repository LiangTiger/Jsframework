function addloadevent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
window.onload=function(){
    var para=document.createElement('p');
    var testdiv=document.getElementById('testdiv');
    testdiv.appendChild(para);
    var txt=document.createTextNode('hello world');
    para.appendChild(txt);
}
window.onload=function(){
    var para=document.createElement('p');
    var txt1=document.createTextNode('This is');
    para.appendChild(txt1);
    var emphasis=document.createElement('em');
    var txt2=document.createTextNode('my');
    emphasis.appendchild(txt2);
    para.appendchild(emphasis);
    var txt3=document.createTextNode('content');
    para.appendchild(txt3);
    var testdiv=document.getElementById('testdiv');
    testdiv.appendchild(para);
}