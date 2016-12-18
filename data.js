if(!Data.now){
    Data.now=function(){
        return new Data;
    }
}
if((new Data).getYear()>1900){
    Data.prototype.getYear=function(){
        return this.getFullYear()-1900;
    };
    Data.prototype.setYear=function(year){
        return this.setFullYear(year);
    }
}

var getDataPeriod=function(start,finish){
    return Math.abs(start*1-finish*1)/60/60/1000/24
}
var getFirstDataInMonth=function(data){
    return new data(data.getFullYear(),data.getMonth()+1,0);
}