// // Inheritence in JS using __proto__
// //-----------------------------------

// Employee base object
//---------------------
const emp1 = {

  empId: 77,
  empName: 'Sonali Sinha',
  empSal: 9800.00,

  disEmployeeInfo: function() {

    return 'EmployeeId: ' + this.empId + ', EmployeeName: ' + this.empName + ', EmployeeSalaary: ' 
    + this.empSal;
  },

  calculateEmpAnnualSal: function() {

    return this.empSal * 12;
  }
}

// Manager child object 
//---------------------
const sonaliManager = {

  deptId: 20,
  deptName: 'Banking and Insurance',
  displayManagerInfo: function() {

    return this.disEmployeeInfo() + ' ' + ' DepartmentId: ' + this.deptId + ' DepartmentName: ' + this.deptName;
  }
}


sonaliManager.__proto__ = emp1

console.log('emp1 Object:', emp1)
console.log('Sonali manager Object:', sonaliManager)
console.log('Manager Information:', sonaliManager.displayManagerInfo())
console.log('Annual Salary of Manager:', sonaliManager.calculateEmpAnnualSal())

console.log('***********************************************************************')

// To remember
//------------

// -> The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.


// -> Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.

function Person(fname, lname) {

  this.fname = fname;
  this.lname = lname;

  this.showName = function() {

    return 'Full name is: ' + this.fname + this.lname; 
  }
}

Person.prototype.checkPerson = function() {

  console.log('I am a Person')
}

const person1 = new Person('Jennifer', 'Lopez');

console.log(person1.__proto__) // -> { checkPerson: [Function (anonymous)] }