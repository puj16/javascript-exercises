const sumAll = function(a,b) {
if(a>=0 && b>=0&&[a,b].every(Number.isInteger)){
    let result=0
    let start,end = 0;
    if(b>a) {
        start=a; end=b;
    }else{
    start = b;end=a;
    }
    for(let i = start;i<=end;i++){
        result+=i;
    }
    return result;
}else{
    return "ERROR"
}};

// Do not edit below this line
module.exports = sumAll;
