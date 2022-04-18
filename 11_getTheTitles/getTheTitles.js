const getTheTitles = function(arrayOfBooks) {
    let arrayOfTitles = arrayOfBooks.map(book => {return book.title;});
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
