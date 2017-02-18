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