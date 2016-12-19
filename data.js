if(!date.now){
    date.now=function(){
        return new date;
    }
}
if((new date).getYear()>1900){
    date.prototype.getYear=function(){
        return this.getFullYear()-1900;
    };
    date.prototype.setYear=function(year){
        return this.setFullYear(year);
    }
}

var getdatePeriod=function(start,finish){
    return Math.abs(start*1-finish*1)/60/60/1000/24
}
var getFirstdateInMonth=function(date){
    return new Date(date.getFullYear(),date.getMonth(),1);
}
var getLastdateInMonth=function(date){
    return new Date(date.getFullYear(),date.getMonth()+1,0)
}
date.prototype.isLeapYear=function(){
    return new Date(this.getFullYear(),2,0).getdate()==29;
}
function getDaysInMonth1(date){
    switch (date.getMonth()){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
        return 31;
        case 1:
        var y=date.getFullYear();
        return y%4==0&&y%100!=0||y%400==0?29:28;
        default:
        return 30;
    }
}
function getDaysInMonth2(date){
    return new Date(date.getFullYear(),data.getMonth()+1,0).getDate();
}
