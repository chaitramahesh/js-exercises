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



/*
  11. to check two numbers and return 
  true if one of the number is 100 or if the sum of the two numbers 
  is 100 */

// function isHundred(num1, num2) {
//   let sum = num1 + num2;
//   if(num1 === 100 || num2 === 100 || sum === 100){
//     return true;
//   }else 
//   return false;
// }
// console.log(isHundred(45,33))

            // or //
// const isHundred = (num1,num2) => num1 === 100 || num2 === 100 || (num1 + num2) === 100 
// console.log(isHundred(34,55));
// console.log(isHundred(45,55));

 /* 12. to get the extension of a filename   */

//  function getFileExtension(str){
//   return str.slice(str.lastIndexOf('.'));
//  }
// console.log(getFileExtension('index.html'));
// console.log(getFileExtension('webpack.config.js'))


/* 13. to replace every character in given string with the 
character following it in the alphabet */

// String.fromCharCode
// charCodeAt

// const moveCharForward = (str) => {
//  return str.split('')
//      .map(char => String.fromCharCode(char.charCodeAt() + 1))
//      .join('') ;
// }
// console.log(moveCharForward('abcde'));

         // or //
//  const moveCharForward = (str) => {
//   let arr = []
//   for(let i=0;i<str.length;i++){
//    let char = String.fromCharCode(str[i].charCodeAt() + 1);
//    arr= [...arr, char];
//   }
//   return arr.join('')
// }
// console.log(moveCharForward('abcde'));


/* 14. to get current date
  expected format : dd/mm/yyyy */
  // let date = new Date(); console.log(Date())
  // const getDate = (date) => {
  //   let days = date.getDate();  // .getDay() gives day( 0 for sunday, 1 for monday...)
  //   let months = date.getMonth() + 1 ;  // +1 is bcz month starts with index 0 for january in js 
  //   let years = date.getFullYear();
  //   return `${days}/${months}/${years}`
  // }
  // console.log(getDate(date));


  /* 15. to create a new string adding "New!" in front of a given string.
   If the given string begins with "New!" already then return the original string. */

//    let newString = function(str){
//     let str1 = "New!"
//     if(str[0] === str1[0] && str[1] === str1[1] && str[2] === str1[2])
//     return str;
//     else 
//     return str+' '+str1;
//    }
//  console.log(newString('New! company'));
//  console.log(newString('company'));

      // or //
  //  let str = "hi i am a girl"  
  // const index = (str) => str.indexOf('New!') === 0 ? str : `${str} New!` 
  // console.log(index(str))



  /* 16. to create a new string from a given string taking the first 3 characters 
  and the last 3 characters of a string and adding them together. The string length
   must be 3 or more, if not, the original string is returned. */
   
  //  const newString = (str) => str.length<3 ? str : str.slice(0, 3) + str.slice(-3);
  //  console.log(newString('ab'));
  //  console.log(newString('hsktjds'));
  //  console.log(newString('abcdsejlld'));




/* 17. to extract the first half of a string of even length */
// function firstHalfOfString(str) {
//   return str.slice(0, str.length/2);
// }
// console.log(firstHalfOfString('abcde'));
// console.log(firstHalfOfString('abcdefgh'));
// console.log(firstHalfOfString('abcdef'));



/*18. to concatenate two strings expect their 
first character */
// const concatStrings = (str1,str2)=> str1.slice(1) + str2.slice(1);
// console.log(concatStrings('hhe', 'lllo'));
// console.log(concatStrings('II', 'aam'));



/* 19. to find out which one is nearest to 100 out of two given values*/
// const nearestValues = (value1,value2)=>
// Math.abs(100 - value1) < Math.abs(100 - value2)? value1:value2 ;
// console.log(nearestValues(98,108));
// console.log(nearestValues(78,87));
// console.log(nearestValues(99,99));
// console.log(nearestValues(26,128));



/* 20. to check a given string contains 2 to 4 occurrences 
of a specified character */
// function contains2To4(str,char){
//   let strArr = str.split('').filter(character => character === char);
//   if(strArr.length>=2 && strArr.length<=4)
//   return true;
//   else
//   return false;
// }
// console.log(contains2To4('ooh!','o'));
// console.log(contains2To4('oh!','o'));
// console.log(contains2To4('oooh!','o'));
// console.log(contains2To4('ooooh!','o'));
// console.log(contains2To4('oooooh!','o'));
