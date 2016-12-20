function A(){
}
A.prototype={
    aa:"AA",
    method:function(){

    }
};
var a=new A;
var b=new B;
console.log(a.aa===b.aa);//true
console.log(a.method===b.method);//true
function A(){
    var count=0;
    this.aa="aa";
    this.method=function(){
        return count;
}
    this.obj={};
}
A.prototype={
    aa:"aa",
    method:function(){
    }
};
var a=new A;
var b=new B;
console.log(a.aa=b.aa);
console.log(a.obj=b.obj);
console.log(a.method=b.method);
delete a.method;
console.log(a.method===A.prototype.method)//true
A.method2=function(){
    };
var c=new A;
console.log(c.method2);
function A(){}
    A.prototype={
        aaa:1
    }
    function B(){}
    B.prototype=A.prototype;
    var b=new B;
    console.log(b.aaa);
    A.prototype.bbb=2;
    console.log(b.bbb);
function extend(destination,source){
    for(var prototype in source)
    destination[prototype]=source[prototype];
    return destination;
};
A.prototype={
    aa:function(){
        alert(1)
    }
}
function bridge(){}
bridge.prototype=A.prototype;
function B(){}
B.prototype=new bridge();
var a=new A;
var b=new B;
console.log(A.prototype==B.prototype);
console.log(a.aa===b.aa);
A.prototype.bb=function(){
    alert(2)
}
console.log(a.bb===b.bb);
B.prototype.cc=function(){
    alert(3)
}
console.log(a.cc===b.ccc)//false
console.log(b instanceof A);
console.log(b instanceof B);
Object.create=function(o){
    function F(){}
    F.prototype=o;
    return new F();
}
function inherit(init,parent,proto){
    function Son(){
        Parent.apply(this.argument);
        init.apply(this.argument);
    }
    Son.prototype=Object.create(Parent.prototype,{});
    Son.prototype.toString=Parent.prototype.toString;
     Son.prototype.valueOf=Parent.prototype.valueOf;
     Son.prototype.constructor=Son;
     extend(Son.prototype,proto);
     extend(Son,Parent);
     return Son;
}
function A(){}
A.prototype={
    aa:1
}
var a=new A;
console.log(a.aa);
A.prototype={
    aa:2
}
console.log(a.aa);
function B(){}
B.prototype={
    aa:3
}
a.constructor=B;
console.log(a.aa);
function A(){
    console.log(this._proto_.aa);
    this.aa=2
}
A.prototype={
    aa:1
}
var a=new A;
console.log(a.aa);
a._proto_={
    aa:3
}
delete a.aa;
console.log(a.aa);
function A(){}
A.prototype={
    aa:1
}
function bridge(){}
bridge.prototype=A.prototype;
function B(){}
B.prototype=new bridge();
B.prototype.constructor=B;
var b=new B;
B.prototype.cc=function(){
    alert(3)
}
console.log(b._proto_==B.prototype);
console.log(b._proto_._proto_===A.prototype);