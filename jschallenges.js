
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