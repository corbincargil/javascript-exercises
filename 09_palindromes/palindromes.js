const palindromes = function (myString) {
    //Getting base string
    myString = myString.toLowerCase().trim();
    let base = myString.replace(/[^a-z]/g,"");

    //checking if the base string is a palindrome
    let forwardString = base;
    let forwardArray = base.split("");
    let reverseArray = forwardArray.reverse();
    let reverseString = reverseArray.join("");

    if (forwardString == reverseString){
       return true; 
    } else {
        return false;
    }
        
};

// Do not edit below this line
module.exports = palindromes;
