const accountId = 144553
let accountEmail = "lyhxr@example.com"
var accountPassword = "1234567890"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hzdkv@example.com"
accountPassword = "21"
accountCity = "Hyderabad"

console.log(accountId);
/*
Prefer not to use var 
beacuse of issue in block scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity])