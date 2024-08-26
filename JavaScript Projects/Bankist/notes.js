const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = [`a`, `b`, `c`, `d`, `e`];

//Slice Method(does not changes the main array)

console.log(arr.slice(2)); //here 2 is the starting index from where we want the array to be sliced
console.log(arr.slice(2, 4)); //here 2 is the starting index from where we want the array to be sliced and 4 is the ending index

console.log(arr.slice(-2)); //slicing from behind gives us `d` and `e` as `d` has a negative index of -2 so we get all elements after and including `d`.

console.log(arr.slice(1, -2)); //gives us `b` and `c` starting from index 1 included and ending at index -2 not included

//To create shallow copy using array
console.log(arr.slice()); //gives us the same array same as we did earlier with the spread operator console.log([...arr]);

//Splice Method(Can change the main array can mutate the main array)

console.log(arr.splice(2)); // gives c,d,e
console.log(arr); //now only remaining elemets are a,b it changes the main array

//splice method is generally used to remove the elements from the array and the most common use is to remove the last element of an array.
arr.splice(-1);
console.log(arr); //now we just have `a` in the main array as we removed the last element `b` from the main array.

let arrnew = [`a`, `b`, `c`, `d`, `e`];
arrnew.splice(1, 2); //here we are starting from index 1 and removing 2 elements so we will be removing b,c which shows that the second parameter is the number of elemets we want to delete
console.log(arrnew); //now we just have a,d,e in the arrnew

//Reverse Method
console.log(arrnew.reverse());
console.log(arrnew); //the main array is also mutated(changed)

//Cocat Method

const concatarr = arr.concat(arrnew); //arr is concatenated with arrnew and it does not mutate the original array
console.log(concatarr);
//we used to do the same thing in a different way like :
console.log([...arr, ...arrnew]); //does not change the main arrays

//Join Method
console.log(arrnew.join(`-`)); //returns a string `e-d-a`

//At Method

const array = [23, 11, 64];

console.log(array[0]);

console.log(array.at(0)); //at position 0

console.log(array[array.length - 1]); //Normal way to access the last element of array

console.log(array.slice(-1)[0]); //copy of the array with last element and then to get the value we add [0]

console.log(array.at(-1)); //to get directly the value of last element

//we can use the at method on strings as well
console.log(`Jonas`.at(0));

//Looping over arrays using foreach method

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You demosited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`---FOROF LOOP WITH INDEX---`);
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You demosited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
}
//To get the index with value in for of loop we wrote for(const [index,value] of movements.entries){};
//Using for each method
console.log(`---FOREACH---`);
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You demosited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
console.log(`---FOREACH LOOP WITH INDEX---`);
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You demosited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
});

//Note:Continue and Break statements don't work in foreach loop/method

//For Each Loop With Maps and Sets

//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
//Set
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}:${value}`); //key is same as value
});

//CHALLENGE

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); //creating shallow copy
  //Removing the first and last two elements (method 1)
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  //creating shallow copy
  //Removing the first and last two elements (method 2)
  console.log(dogsJulia.slice(1, 3));
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//Map | Filter | Reduce

//1)Map returns a new array containing the results of applying an operation on all original array elements. 2)Filter returns a new array containing the array elements that passed a specified test condition. 3)Reduce boils("reduces") all array elements down to one single value (e.g. adding all elements together).

const eurToUsd = 1.1;

// const movementsInUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsInUsd);

//Doing the same job using forof loop

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

//Using Arrow Function In Map

const movementsInUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsInUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? `desposited` : `withdrew`} ${mov}`
);
console.log(movementsDescriptions);

//Filter Method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(mov => mov < 0);

console.log(deposits);
console.log(withdrawals);

//Doing the same job with for of loop

const depositsforof = [];

for (const mov of movements) {
  if (mov > 0) {
    depositsforof.push(mov);
  }
}
console.log(depositsforof);

//Reduce Method
//here accumulatore keeps the track of the answer
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0); //0 is the initial value of the accumulator

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//Doing the same with the for of loop

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);

//To get max value from a array

const maxmov = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);

console.log(maxmov);

//CODING CHALLENGE

//1)
const humanAge = arr => arr.map(ele => (ele <= 2 ? ele * 2 : (16 + ele) * 4));

console.log(humanAge([5, 2, 4, 1, 15, 8, 3]));

//2)
const filterDogs = arr => arr.filter(ele => ele >= 18);

console.log(filterDogs(humanAge([5, 2, 4, 1, 15, 8, 3])));

//3)
const avgHumanAge = arr =>
  arr.reduce((acc, ele, i, arr) => acc + ele / arr.length, 0);

console.log(avgHumanAge(filterDogs(humanAge([5, 2, 4, 1, 15, 8, 3]))));

//The Magic Of Chaining Methods

// const totalDepositInUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositInUSD);

//To Check The Output In Every Step
const totalDepositInUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositInUSD);

//Chaining Practice

const avghumanage = arr =>
  arr
    .map(ele => (ele <= 2 ? ele * 2 : (16 + ele) * 4))
    .filter(ele => ele >= 18)
    .reduce((acc, ele, i, arr) => acc + ele / arr.length, 0);
console.log(avghumanage([5, 2, 4, 1, 15, 8, 3]));

//Find Method

//Only return first matched value not the whole array'

const firstNegEle = movements.find(mov => mov < 0);
console.log(firstNegEle);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);

//Find Index Method

//Example below shows how to access the index of a element in a array with certain condition and then use it to delete that element from the array . We also have .indexOf(value) method but its limitation is that with it we can't use any complex conditions or expressions

// const index = accounts.findIndex(
//   acc => acc.username === currentAccount.username
// );
// accounts.splice(index, 1);

//Some and Evey Methods

//Some

//Here .includes() method returns boolean values if the element is present in the movements array but the limitation is that it can not contain the complex conditions and expressions

console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 0); //checks if we have (any) mov in the movements array that is positive

console.log(anyDeposits);

console.log(movements.some(mov => mov === -130));

//Every

//Only returns true if all the elements in the array satisfy the specified condition

console.log(movements.every(mov => mov > 0)); //Every Movement should be positive for it to return positive

//Note : All the callback functions can be written seperately and then directly passed in the methods

/*Flat and Flatmap methods

const arrnest = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arrnest.flat()); //to get a full array from 1 to 8 (removes the nesting and flatten the array)

const deeparrnest = [[1, [2, 3]], [4, [5, 6]], 7, 8];

console.log(deeparrnest.flat()); //flat() method goes only one level deep to flatten the array so it doesn't completely flatten the array.So to go further deep we can specify the deepth level (default level is 1)

console.log(deeparrnest.flat(2)); //gives correct ans

const accountMovements = accounts.map(acc => acc.movements); //returns a array containing all the movement arrays

const allMovements = accountMovements.flat(); //to have all movements from all accounts

const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0); //calculating the sum of all movements

console.log(overAllBalance);

//Doing the above task using chaining
const overAllBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance2);

//Now to flat and map at same time we use flatMap() method (it only goes one level deep)

const overAllBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance2);

*/

//Sorting Arrays

const owners = [`jonas`, `zach`, `adam`, `maetha`];

console.log(owners.sort()); //mutates the original array

const numbers = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(numbers.sort()); //this sort() method only works on string data in the array so it will not give the correct output for numbers

//So we have to pass a callback function

//If we return  something < 0 then a will be before b(keep order) and vice-versa (switch order).

numbers.sort((a, b) => {
  //For ascending order
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log(numbers);

numbers.sort((a, b) => {
  //For descending order
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
});
console.log(numbers);

//In a more simplified way we can just return a-b if a>b its positive else negative

numbers.sort(
  (a, b) => a - b //For ascending order
);
console.log(numbers);
numbers.sort(
  (a, b) => b - a //For descending order
);
console.log(numbers);

//More Ways To Create And Fill Arrays

//Old ways are

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
