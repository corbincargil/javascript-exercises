const removeFromArray = function(...args) {
    const loopLength = args[0].length;
    const myArray = args.shift();
    const wantRemoved = args;

    for (let i = 0; i < loopLength; i++) {
        const index = myArray.indexOf(wantRemoved[i]);
        if (index === -1) {
            
        } else {
            myArray.splice(index,1);
        }
        
        
    }
    
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
