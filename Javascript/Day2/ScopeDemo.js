var age = 25;

// globalThis.age = 67;

// User object
//------------
var User = {

  firstName: 'Akshay',
  age: 45,

  getAge: function() {
    return this.age;
  }
} 

// Customer object
//----------------
var Customer = {

  firstName: 'Karthik',
  age: 25,

  getAge: function() {
    return this.age;
  }
}

// 1) Works perfectly
//-------------------
const userAge = User.getAge()
const customerAge = Customer.getAge()

console.log('type of userAge:', typeof userAge)
console.log('Value of userAge:', userAge)
console.log('type of customerAge:', typeof customerAge)
console.log('value of customerAge:', customerAge)

//--------------------------------------------------------------------------------------------------------

// 2) Works well and prints function definition
//---------------------------------------------
// const userAge = User.getAge
// const customerAge = Customer.getAge

// console.log('type of userAge:', typeof userAge)
// console.log('Value of userAge:', userAge)
// console.log('type of customerAge:', typeof customerAge)
// console.log('value of customerAge:', customerAge)

//--------------------------------------------------------------------------------------------------------

// 3) Throws eror due to scope issue
//----------------------------------
// const userAge = User.getAge
// const customerAge = Customer.getAge

// console.log('type of userAge:', typeof userAge)
// console.log('Value of userAge:', userAge())
// console.log('type of customerAge:', typeof customerAge)
// console.log('value of customerAge:', customerAge())

//----------------------------------------------------------------------------------------------------------

// 4) Solved the scope issue using bind() method
//----------------------------------------------

// const userAge = User.getAge;
// const userBoundedAge = userAge.bind(User)

// const customerAge = Customer.getAge
// const customerBoundedAge = customerAge.bind(Customer)


// console.log('type of userAge:', typeof userAge)
// console.log('type of userBoundedAge:', typeof userBoundedAge)
// console.log('Value of userBoundedAge:', userBoundedAge())

// console.log('type of customerAge:', typeof customerAge)
// console.log('type of customerBoundedAge:', typeof customerBoundedAge)
// console.log('value of customerBoundedAge:', customerBoundedAge())