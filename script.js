//EX 2.1
// const typeNumber = function(num) {
//     if(num % 2 == 0) 
//     return 'The number is even';
//     else return 'The number is odd';
// }

// console.log(typeNumber(30));

//EX 2.2
const typeNumber = (num) =>
    num % 2 == 0 ? 
    'The number is even':'The number is odd';

console.log(typeNumber(30));