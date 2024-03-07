/*
// 1. case change

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}
console.log(camelize("background-color")) 
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))
*/

/*
// 2. filter range

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }

  let arr = [5, 3, 8, 1];

  let filtered = filterRange(arr, 1, 4);

  console.log( filtered ); // 3,1 (matching values)

  console.log( arr ); // 5,3,8,1 (not modified)
*/

/*
  // 3. filter range in "place"

  function filterRangeInPlace(arr, a, b)
    {
        for(let i=0; i<arr.length; i++){
        let val=arr[i];
        if(val<a || val>b){
        console.log(arr.splice(i,1));
            i--;
        }
    }
}
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4)
console.log(arr)
*/

/*
// 4. sort in decreasing order
 
 arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>b-a);
console.log(arr);
*/

/*
// 5. copy and sort array

arr=["HTML", "JavaScript", "CSS"];
function copySorted(arr){
   return arr.slice().sort();
}
let sorted = copySorted(arr)
console.log(sorted);
console.log(arr);
*/

/*
// 6. map to names

let john = { name: "John", age: 25 };
let pete = { name: "pete", age: 30 };
let mary = { name: "Mary", age: 28 };
 
let users = [john, pete, mary];

let names = users.map(item => item.name);

console.log(names);
*/

/*
// 7. map to object

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => 
({fullName: `${user.name}${user.surname}`,
 id: user.id})); 
  //double brackets used to map an array of objects 
    //to array of  objects using arrow function

 console.log(usersMapped);
*/

/*
// 8. sort users by age

function sortByAge(arr) {
  return arr.sort((a,b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);  // if we don't call fn, no any fn operations, array will not change
console.log(arr[1].name, arr[1].age);
console.log(arr);
*/

/*
// 9. shuffle an array

function shuffle(array){
  array.sort(() => Math.random() - 0.5);
}
let arr = [1,2,3,4];
shuffle(arr);
console.log(arr)
*/

/*
// 10. Get average age

function getAverageAge(array) {						
   return array.reduce((sum, item) => sum + item.age, 0) / array.length;						
  }						
              
  let john = { name: "John", age: 25 };						
  let pete = { name: "Pete", age: 30 };						
  let mary = { name: "Mary", age: 29 };						
              
  let arr = [ john, pete, mary ];						
              
  console.log(getAverageAge(arr));		
  console.log(arr);				
  */

/*
// 11.  filter unique array member

function unique(arr) {
  let result=[];

  for(let str of arr){
    if(!result.includes(str))
     result.push(str);
  }
return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings));
*/

/*
// 12. create keyed object from array

function  groupById(array) {
  return array.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {})
};
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31}, ];

 let usersById = groupById(users);
console.log(usersById); 
*/

/*
//13. This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
function checkForFactor(base, factor) {
  return base % factor === 0;
}
console.log(checkForFactor(76, 3));
console.log(checkForFactor(34, 2));
console.log(checkForFactor(348, 15));
*/

/*
//14. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// const quarterOf = (month) => {
//   // Your code here
//   return Math.ceil(month / 3);
// };

// or

// const quarterOf = (month) => {
//   //Your code here
//   if (month <= 3) {
//     return 1;
//   } else if (month > 3 && month <= 6) {
//     return 2;
//   } else if (month > 6 && month <= 9) {
//     return 3;
//   } else if (month > 9 && month <= 12) {
//     return 4;
//   } else {
//     return "Error";
//   }
// };
// console.log(quarterOf(5));
// console.log(quarterOf(7));
*/

/*
//15. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(123))
*/

/*
//16. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//   return Array.from(String(n), Number).reverse();
// }

// or

// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// }

// console.log(digitize(46789));
*/
