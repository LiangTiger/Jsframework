function isArray(arr){
    return arr instanceof Array;
}
function isArray(arr){
    return !!arr && arr.constructor == Array;
}
function isArray(arr){
    return arr!=null && typeof arr==="object" && 'splice' in arr && 'join' in arr;
}
function isArray(arr){
    return typeof arr.sort==="function";
}