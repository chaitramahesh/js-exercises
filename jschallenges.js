
/*
// * 1. longest word 

function longestWord(str) {
    let words = str.split(" "); //if no space then splits single letters
    let longestWord = [""];
    let size=0;
    
    for (let i=0;i<words.length;i++){
       if(words[i].length>=size){
        size=words[i].length;
          if(size>longestWord[0].length){
           longestWord = [];
           longestWord.push(words[i]);
}
else longestWord = [...longestWord, words[i]];
}
}
return [...longestWord];
};
 console.log(longestWord("I woke up early  today"));
 console.log(longestWord("I went straight  to the beach"));
*/



/*
// * 2. Math sequences 

function mathSequences(arr){
    let arith=[];
    let geo=[];

    for(let i=1;i<arr.length;i++){
        let num1 = arr[i] - arr[i-1];
        arith.push(num1);
        let num2 = arr[i]/arr[i-1];
        geo.push(num2);
    }
    console.log(arith);
    console.log(geo);
}
let arr=[2, 4, 6, 8]
mathSequences(arr);
 
// to avoid repetition on arith and geo
// we use Set() as follows:

function mathSequences(arr){
    let arith=new Set();
    let geo=new Set();

    for(let i=1;i<arr.length;i++){
        let num1 = arr[i] - arr[i-1];
        arith.add(num1);
        let num2 = arr[i]/arr[i-1];
        geo.add(num2);
    }
    if(arith.size===1)
    return "Arithmetic";
    else if (geo.size===1)
    return "Geometric";
    else 
    return -1;
}
console.log(mathSequences([2, 4, 6, 8]));
console.log(mathSequences([3, 9, 27]));
console.log(mathSequences([2, 5, 14, 89]))
*/



/*
//  * 3. capitalize first letter 

function capitalizeWords(str){
 let words = str.split(" ")
               .map( word => {
 return word[0].toUpperCase() + word.slice(1);
// word.charAt(0).toUpperCase() also can be done//
 } );
 return words.join(" ");
}
console.log(capitalizeWords("I got up early today"));
console.log(capitalizeWords("I walked straight to the beach"));
*/



/*
// * 4. return true only if all values are unique, 
// otherwise false. 

function unique(str){
    let arr = str.split('');
    let result;
    for(let i of arr){
        if(arr.indexOf(i) !== arr.lastIndexOf(i))
        result = false;
        else result = true;
}
return result;
}

console.log(unique("abcde"))
console.log(unique("abacdefb"))

// * another way is:

function unique(str){
    for (let i = 0; i < str.length; i++){
        if (str.lastIndexOf(str[i]) !== i){
        return false;
        }
    }
    return true;
}
console.log(unique("abcde"))
console.log(unique("abacdefb"))
*/


/*
// * 5. Array sum 

function arraySum(arr) {
    let sum = 0;
    let max = 0;
      arr.forEach(num => {
        (sum+=num);
        if(num>max)
        (max = num); 
        
     })
      return (sum - max) === max;
}
console.log(arraySum([1,6,4,2,13]));
console.log(arraySum([1,34,4,2,22]));

// * another method
function arraySum(arr) {
    let newArr = arr.sort((a,b) => a-b);
    let large = newArr.pop();
      let sum = 0;
      newArr.forEach( num => sum+=num)
      return large===sum;
}
console.log(arraySum([1,6,4,2,13]));
console.log(arraySum([1,34,4,2,22]));
*/



/*
//  6. Unique Values with Set()

function unique(str) {
    let unq = new Set();
     for(let i=0; i< str.length; i++){
      unq.add(str[i]);
      
    }
    return unq.size === str.length;
 }
console.log(unique("abcd"));
console.log(unique("abcdade"));

// * another way

function unique(str) {
        let unq = new Set();
         for( let letter of str){
            if(unq.has(letter))
            return false;
            unq.add(letter);
         }
         return true;
    }
    console.log(unique("abcd"));
    console.log(unique("abcdade"));
*/



/* 7. Unique object property values */

// let products= [
//     {
//         title: "Iphone 8",
//         company: "apple"
//     },
//     {
//         title: "Galaxy",
//         company: "samsung"
//     },
//     {
//         title: "Iphone 7",
//         company: "apple"
//     },
//     {
//         title: "Iphone Xs",
//         company: "apple"
//     },
//     {
//         title: "HTC Phone",
//         company: "htc"
//     },
// ]

// // using map
//  function unique(arr){
//      return [...new Set(arr.map(item => item.company))] ;
//  }

// console.log(unique(products));

// //using reduce

// function unique(arr){
//     return [...arr.reduce((acc, current)=>{
//          acc.add(current.company)
//          return acc;
//     }, new Set())];
// }

// console.log(unique(products));





/* 8. return first word with greatest number of repeated letters */

// function repeatedLetters(str){
//     tempArr = str.split(" ").map(item=>{
//       tempItem = item.toLowerCase().split('');
//       return tempItem.reduce((acc, current)=>{
//        acc[current]= acc[current]? acc[current]+1 : 1 ; // creating property acc[current] of the acc 
//        if(acc[current]>acc.max){
//         acc.max  =acc[current];
//        }
//        return acc;
//       },{max: 1, word: item})
//     })
//     let number=1;
//     let word='';
//     for(let item of tempArr){
//     if(item.max>number){
//       number=item.max;
//       word= item.word
//     }}

//     if(number>1)
//     return word;
//     else
//     return "none";
  
// }

// console.log(repeatedLetters("Javascript is the greatest programming language"))





/* 9. second value/ second lowest and second greatest */

// function secondValue(arr){
//     let values= [...new Set(arr)].sort((a,b)=> a-b);
//     if(values.length<2){
//         return `${values[0]}`
//     }
//     else if (values.length === 2){
//         return `${values[0]} ${values[1]}`
//     }
//     else if (values.length === 3){
//         return `${values[1]}`
//     }
//     else{
//         return `${values[1]} ${values[values.length-2]}`
//     }
// }
// console.log(secondValue([1]));
// console.log(secondValue([4,2]));
// console.log(secondValue([44,11,22]));
// console.log(secondValue([3,2,88,3,-11,67,7]));




/* 10. repeated numbers  */
// //return number with most repeat
// //if two No.s are repeated same number of time then return first
// // if no repeated no.s return -1

// function mostRepeat(arr){
//     let max=1;
//     let value=-1;
//     let position= 0;
//     arr.reduce((acc, curr, index)=>{
//         acc[curr]= acc[curr]? {...acc[curr], amount: acc[curr]["amount"]+1} : {amount:1,index}

//      amount= acc[curr].amount;
//      place = acc[curr].index;
//     if(amount>max || (amount === max && place<=position && amount>1)){
//         max=amount;
//         value=curr;
//         position= place;
//     }

//     return acc
// },{}) 
// return value
// }

// console.log(mostRepeat([5,2,2,1,5]))
// console.log(mostRepeat([6,5,5,10,10,10]))
// console.log(mostRepeat([3,4,1,6,10]))




/* 11. prime number */ 

// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//     if(num % i ===0){
//     return false;
//     }
//     }
//     return true;
// }

 //     // another way
// function isPrime(num){
//         if(num<2){
//             return false;
//         }
//         let root = Math.ceil(Math.sqrt(num))
//         for(let i=2;i<=root;i++){
//         if(num % i ===0){
//         return false;
//         }
//         }
//         return true;
//     }
    

// console.log(isPrime(8))
// console.log(isPrime(11))
// console.log(isPrime(121))
// console.log(isPrime(127))




/* 12. count repeating letters */

// function countLetters(str){
//     let tempArr=str.split("")
//     let count=1
//     letters=[]
//     for(let i=0;i<tempArr.length;i++){
//         if(tempArr[i]===tempArr[i+1]){
//         count++;
//         }
//         else{
//             let value=`${count}${tempArr[i]}`;
//             letters=[...letters,value]
//             count=1
//         }
//     }

//     return letters
// }
// console.log(countLetters("ttttuuuueeeeeggggeee"))





/* 13. regex palindrome */

// function checkPalindrome(str){
//     let first=str.split(" ").join("").toLowerCase();
//     let second = first.split("").reverse().join("")
//     return first===second;
// }
// console.log(checkPalindrome("Was it a car or a cat I saw"))
// console.log(checkPalindrome("Red -rum-, sir,-is-murder"))
// // even though above one is a palindrome it gives false bcz split will not consider any special characters or cases
// console.log(checkPalindrome("I got up early this morning"))

//       // correct method

// function checkPalindrome(str){
//     let first= str.match(/[a-z0-9]+/ig).join("").toLowerCase()
//     let second = first.split("").reverse().join("")
//     // return first===second;
//     return first===second? "It is a palindrome":"It is not a palindrome";
// }
// console.log(checkPalindrome("Was it a car or a cat I saw"))
// console.log(checkPalindrome("Red -rum-, sir,-is-murder"))
// console.log(checkPalindrome("I got up early this morning"))