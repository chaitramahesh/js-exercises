 /* 
// 1. Square and sum the array elements using the arrow function 
// and then find the average of the array.

let numbs = [25, 45, 55, 77, 88, 99];
 
const square = numbs.map(num => num*num);
console.log(square);
let average = square.reduce((acc, cur) => acc + cur, 0)/numbs.length;
console.log(average); 
 */



/*
// 2. Create a new array using the map function whose each
// element is equal to the original element plus 4.

let array = [4, -4, 10, 203, 53, 11];
let newArray = array.map(num => num + 4);
console.log(array);
console.log(newArray);
*/


/*
// 3. Define array of strings containing additional space
// characters at the beginning and end. Use the array 
// map method to return a
// new array full of trimmed names. 
// For example:
// cleanNames([" avengers", "   captain_america", "iron-man   ", " black panther   "]) 
// should give:
// ["avengers", "captain_america", "iron-man", "black panther"]
//

let arr = [" avengers", "   captain_america", "iron-man   ", " black panther   "]
console.log(arr);
console.log(arr.map(name => name.trim()));

using function 
let arr = [" avengers", "   captain_america", "iron-man   ", " black panther   "]
 
function cleanName(users){
return users.map(name => name.trim())
}
console.log(arr);
console.log(cleanName(arr)); 
*/



/*
// 4. Convert an array of values from 
// miles to kilometers. find total distance.

let arr = [1, 2, 3, 4, 5, 6];

let miles = arr.map(num => num*1.609); 

console.log(arr);
console.log(miles);
console.log(miles.reduce((sum, num) => sum + num , 0));
*/



/*
// 5. From the array of numbers, choose even numbers
// double even numbers and compute the sum.

let arr = [1,2,3,4,5,6];

let even = arr.filter(num => num%2===0);
console.log(arr);
console.log(even);
double = even.map(num => num*2);
console.log(double);
console.log(double.reduce((sum, num) => sum+num,0));
*/



/*
// 6. Create a new array whose elements is in 
// uppercase of words present in the original array.

let strings = ["avengers", "captain america", "iron-man", "black panther"];
console.log(strings.map(string => string.toUpperCase()));
*/



/*
// 7. Use the .map() method on the heros array to return a new array.
// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.

const heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
  ];

const arr = heros.map((hero, index) =>{
    return {id:index, hero : hero.name}
});
console.log(arr);
*/



/*
// 8. Consider the following array:
// inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// Write JavaScript statements that will produce the following output:
// ["exuberant", destruction", "present"]

let inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(inputWords);
let longWords = inputWords.filter(word => word.length>6)
console.log(longWords);
*/



/*
// 9.  Starting with an array containing the numbers 1 through 10, and get following: 
// An array of odd numbers.
// An array of numbers divisible by 2 or 5.
// An array of numbers divisible by 3 and then squared those numbers.
// The sum of the following: square the numbers divisible by 5.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// odd numbs
console.log(numbers.filter(num => num%2!==0));
// An array of numbers divisible by 2 or 5.
console.log(numbers.filter(num => num%2===0 || num%5===0));
// An array of numbers divisible by 3 and 
// then squared those numbers.
let divByThree = numbers.filter(num => num%3===0);
console.log(divByThree);
console.log(divByThree.map(num => num**2));
// The sum of the following: square the numbers divisible by 5.
let divByFive = numbers.filter(num => num%5===0);
console.log(divByFive);
let square = divByFive.map(num => num**2);
console.log(square);
console.log(square.reduce((num, sum) => num+sum, 0));
*/



/*
// 10. Consider the following array:
// find out square of even numbs, find sum of them.
// output should be:
// squaredEvenNumbs: [484, 2116, 7396, 9604]

let numbs = [11, 22, 33, 46, 75, 86, 97, 98];
console.log(numbs.filter(num => num%2===0 )
                .map(num=>num*num));
console.log(numbs.filter(num => num%2===0 )
                .map(num=>num*num)
                .reduce((sum,num) => sum+num,0));
console.log(numbs.reduce((sum,num) => sum+num,0))
*/


