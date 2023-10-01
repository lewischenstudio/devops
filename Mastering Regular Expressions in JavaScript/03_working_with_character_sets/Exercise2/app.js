/*
Using the provided array, create a second array that only includes the valid phone numbers with the 801 area code and format nnn-nnn-nnnn. E.g., 801-77A-6655 is invalid.
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];

let regEx = /801-/,
    newArray = [];
//let newArray = phoneNums.filter(elem => regEx.test(elem));

for (let i = 0; i < phoneNums.length; i++) {
    if (regEx.test(phoneNums[i])) {
        newArray.push(phoneNums[i]);
    }
}

let regEx2 = /801-\d\d\d-\d\d\d\d/
let newArray2 = phoneNums.filter(elem => regEx2.test(elem));
console.log(newArray2)

/* Output
[
  '801-766-9754',
  '801-545-5454',
  '801-796-8010',
  '801-009-0909',
  '801-777-66553'
]
*/

// This lecture didn't teach anchor yet, but the solution involves using anchor $
// Using the anchor $, we can restrict that the regex ends with 4 numbers
let regEx3 = /801-\d\d\d-\d\d\d\d$/
let newArray3 = phoneNums.filter(elem => regEx3.test(elem));
console.log(newArray3)

/* Output
[ '801-766-9754', '801-545-5454', '801-796-8010', '801-009-0909' ]
*/