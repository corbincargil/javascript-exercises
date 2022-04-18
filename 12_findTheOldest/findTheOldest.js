const findTheOldest = function(array) {
    const oldest = array.sort((firstPerson,secondPerson) => {
        if (!firstPerson.yearOfDeath) {
            firstPerson.yearOfDeath = new Date().getFullYear()
        }
        if (!secondPerson.yearOfDeath) {
            secondPerson.yearOfDeath = new Date().getFullYear()
        }
        firstPersonLived = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        secondPersonLived = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        return secondPersonLived - firstPersonLived;
    })
    console.log(oldest[0]);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
