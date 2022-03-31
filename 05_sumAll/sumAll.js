const sumAll = function(sumStart, sumEnd) {
    let mySum = 0;
    if (sumStart < 0 || sumEnd < 0) {
        return 'ERROR';
    } else if (typeof sumStart === "number" && typeof sumEnd === "number"){
        if (sumStart < sumEnd) {
            for (let i = sumStart; i <= sumEnd; i++) {
                mySum += i;
            }
            return mySum;
        } else {
            for (let i = sumEnd; i <= sumStart; i++) {
                mySum += i;
            }
            return mySum;
        }
    } else {
        return 'ERROR';
    } 
};

// Do not edit below this line
module.exports = sumAll;
