// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
    
  const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply());


  // console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));



  var nameVar = 'Andrew';
  var nameVar = 'Mike';
  console.log('nameVar', nameVar);
  
  let nameLet = 'Jen';
  nameLet = 'Julie';
  console.log('nameLet', nameLet);
  
  const nameConst = 'Frank';
  console.log('nameConst', nameConst);
  
  // Block scoping
  
  const fullName = 'Jen Mead';
  let firstName;
  
  if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
  }
  
  console.log(firstName);
  