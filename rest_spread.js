
// Rest / Spread Operator Exercises

// Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
// Refactor it to use the rest operator & an arrow function:
// /* Write an ES2015 Version */
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);


//

//findMin
const findMin = (...args) => Math.min(...args);

//mergebjects
const mergeObjects = (ojb1, obj2) => ({...ojb1, ...obj2})

//doubleAndReturnArgs
const doubleAndReturnArgs = (array, ...rest) => [array, ...rest.map(v => v * 2)];

//Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom =items => {
//make a random element that is a number not larger than the length of the array
let index = Math.floor(Math.random() * items.length);
//return new array excluding random element
return [...items.slice(0,index), ...items.slice(index + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal1 = (obj, key, val) => {
 return {...obj, [key]:val};
}

//OR

const addKeyVal2 = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = value;
    return newObj;
}   

/** Return a new object with a key removed. */

const removeKey = (obj, key)=> {
  const newObject = {...obj}
  delete newObj[key];
  return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
return {...obj, ...obj2};
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key] :val};
}

// OR 
let newObj = {...obj}
newObj[key]= val;
return newObj;