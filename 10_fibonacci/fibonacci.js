const fibonacci = function(num) {
    if (typeof num === 'string') { num = Number(num);}
    if (num == 0) {return 0;} 
    else if (num <= 2 && num >0) {return 1;} 
    else if (num > 2) {
        fibArray = [0,1];
        let nextNum;
        for (let i = 2; i < num+1; i++) {
            nextNum = fibArray[i-1] + fibArray[i-2];
            fibArray.push(nextNum);  
        }
        return(fibArray[num]);
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
