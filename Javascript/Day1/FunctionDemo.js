// 3 ways to create a function are -> using function keyword, using function expression, using Function Object 

// Approach-1
//-----------
function greet1(name, city) {
  return 'Hello ' + name + ' from ' + city + ' Happy New Year to You';
}

let res1 = greet1('Steve', 'Australia');

console.log('type of greet1 Fn:', typeof greet1);
console.log('type of res1:', typeof res1);
console.log('Normal approach:', res1);

// Approach-2
//-----------
let greet2 = function(name, city) {
  return 'Hello ' + name + ' from ' + city + ' Happy New Year to You';
}

let res2 = greet2('Bruce', 'Gotham');

console.log('type of greet2 Fn:', typeof greet2);
console.log('type of res2:', typeof res2);
console.log('Function Expression approach:', res2);

// Approach-3
//-----------
let greet3 = new Function('name', 'city', 
" return 'Hello ' + name + ' from ' + city + ' Happy New Year to You';" )

let res3 = greet3('Anderson', 'England');

console.log('type of greet3 Fn:', typeof greet3);
console.log('type of res3:', typeof res3);
console.log('Function Object constructor approach:', res3);

