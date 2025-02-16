const accountId = 144553
let accountEmail = "uditiraina10@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; // no value is assigned to it

// accountId = 2 // not allowed

accountEmail = "ur@gmail.com"
accountPassword = "9876"
accountCity = "Mumbai"

// console.log(accountId); // agar normally print krna ho toh aise hi likh sakte hai 
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// agar tabular form me chahiye saari info toh 


/* 
Prefer not to use var because
of the issue in block scope and functional scope
*/
 
console.table([accountId , accountEmail ,
    accountPassword , accountCity, accountState
])