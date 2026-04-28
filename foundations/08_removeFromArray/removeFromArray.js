const removeFromArray = function(arr,...args) {
    let filteredArray = [];
    arr.map((item)=>{
        if(!args.includes(item)){
            filteredArray.push(item);
        }
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
