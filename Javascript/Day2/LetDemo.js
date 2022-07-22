// using var keyword
//------------------
var a = 100;

{
  var a = 80;

  {
    var a = 60;
    console.log('inner a value', a) // 60
  }

  console.log('outer a value', a) // 60
}

console.log('Outest a value', a) // 60

console.log('******************************************************************')

// using let keyword which has block scope
//----------------------------------------
var b = 100;

{
  var b = 80;

  {
    let b = 60;
    console.log('inner b value', b) // 60
  }

  console.log('outer b value', b) // 80
}

console.log('Outest b value', b) // 80