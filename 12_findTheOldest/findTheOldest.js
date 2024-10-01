const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function(array) {
                        //Accumulator //CurrentValue
    return array.reduce((oldestPerson, currentPerson) => {
        console.log(oldestPerson, currentPerson)
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(
          currentPerson.yearOfBirth,
          currentPerson.yearOfDeath
        );
        return currentAge > oldestAge ? currentPerson : oldestPerson;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
