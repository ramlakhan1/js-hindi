let score = false;

console.log(typeof score); // number
console.log(typeof(score)); // number

let valueNumber = Number(score);
console.log(typeof valueNumber); // number
console.log(valueNumber); // Nan

// "33"  => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0

let isLoggedIn = 1;

let bol