// Few important methods of Array class
//-------------------------------------- 

let intList1 = new Array(20, 45, 87, 66, 12, 99, 2)
console.log('Length of intList1 array is:', intList1.length) // 7

let intList2 = new Array(20)
console.log('Length of intList2 array is:', intList2.length) // 20 

let intList3 = Array.of(30)
console.log('Length of intList3 array is:', intList3.length) // 1

// from() function from Array which works very similar to map() function, it takes the array to be processed as 1st arg and takes callback function with Business Logic as 2nd argument and process and returns a new array. Lets say we want to add 100 to every elemnt present in intList1 array.

let res1 = Array.from(intList1, (num) => {
  return num + 100;
})

console.log('Array returned by from() fn:', res1) // [120, 145, 187, 166, 112, 199, 102]

// find() fn from Array class which finds/searches for given elemnnt and returns immediately when it finds it, lets say we want find elemnt greater than or equal to 200 from intList1 array.

let res2 = intList1.find((num, index, arr) => {
  return num > 50;
}) 

console.log('result by find() fn:', res2) // 87

// filter() fn 
let res3 = intList1.filter((num) => {
  return num > 50;
})

console.log('result by filter fn:', res3) // [ 87, 66, 99 ]