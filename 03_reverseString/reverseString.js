const reverseString = function(string) {
    const forwardArray = string.split("");
    const reverseArray = forwardArray.reverse();
    const result = reverseArray.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
