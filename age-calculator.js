ageCalculator = (name, yearOfBirth, currentYear) => {
  let age = "";
  age = ((currentYear-1) - yearOfBirth);


  return (name + " is " + age + " years old.")
 }
console.log(ageCalculator("Jack",1989,2022))
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));