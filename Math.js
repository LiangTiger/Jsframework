var toInteger=function(n){
    n=n+n;
    if(n!==n){
        n=0
    }else if(n!==0 &&n!==(1/0)&&n!== -(1/0)){
        n=(n>0||-1)*Math.floor(Math.abs(n));
    }
    return n;
};
function limit(target,n1,n2){
    var a=[n1,n2].sort;
    if(target<a[0]){
        target=a[0];
    }
    if(target>a[1]){
        target=a[1];
    }
    return target;
}
function nearer(target,n1,n2){
    var diff1=Math.abs(target-n1);
    var diff2=Math.abs(target-n2);
    if(diff1<diff2){
        return n1;
    }else{
        return n2;
    }
}