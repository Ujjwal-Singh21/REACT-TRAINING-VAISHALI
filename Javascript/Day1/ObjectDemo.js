// We can create our custom objects other than the already defined JS core objects in 3 different ways, the ways are using constructor function, using Inline object creation, using Object object constructor function.

// Approach-1 (using constructor function)
//----------------------------------------
function Employee(empId, empName, empSal) {

  this.empId = empId;
  this.empName = empName;
  this.empSal = empSal;

  this.disEmployeeInfo = function() {

    return 'EmployeeId: ' + this.empId + ', EmployeeName: ' + this.empName + ', EmployeeSalaary: ' 
    + this.empSal;
  }

  this.calculateEmpAnnualSal = function() {

    return this.empSal * 12;
  }
}

const emp1 = new Employee(1000, 'Suraj Kumar', 4500.00);
const emp2 = new Employee(2000, 'Rajesh Kumar', 5500.00);

console.log('type of emp1:', typeof emp1);
console.log('type of disEmployeeInfo Fn:', typeof emp1.disEmployeeInfo);
console.log('emp1 info:', emp1.disEmployeeInfo());
console.log('emp1 annual salary:', emp1.calculateEmpAnnualSal());

console.log('type of emp2:', typeof emp2);
console.log('type of disEmployeeInfo Fn:', typeof emp2.disEmployeeInfo);
console.log('emp2 info:', emp2.disEmployeeInfo());
console.log('emp2 annual salary:', emp2.calculateEmpAnnualSal());

console.log('***************************************************************')

// Approach-2 (Using Inline Object creation)
//------------------------------------------
const emp3 = {

  empId: 3000,
  empName: 'Sayali Sinha',
  empSal: 9800.00,

  disEmployeeInfo: function() {

    return 'EmployeeId: ' + this.empId + ', EmployeeName: ' + this.empName + ', EmployeeSalaary: ' 
    + this.empSal;
  },

  calculateEmpAnnualSal: function() {

    return this.empSal * 12;
  }
}

console.log('type of emp3:', typeof emp3);
console.log('type of disEmployeeInfo Fn:', typeof emp3.disEmployeeInfo);
console.log('emp3 info:', emp3.disEmployeeInfo());
console.log('emp3 annual salary:', emp3.calculateEmpAnnualSal());

console.log('***************************************************************************')

// Approach-3 (using Object constructor function)
//-----------------------------------------------
const emp4 = new Object();

emp4.empId = 4000;
emp4.empName = 'Krishna';
emp4['empSal'] = 66000.00;

emp4.disEmployeeInfo = function() {

  return 'EmployeeId: ' + this.empId + ', EmployeeName: ' + this.empName + ', EmployeeSalaary: ' 
  + this.empSal;
}

emp4.calculateEmpAnnualSal = function() {

  return this.empSal * 12;
}

console.log('type of emp4:', typeof emp4);
console.log('type of disEmployeeInfo Fn:', typeof emp4.disEmployeeInfo);
console.log('emp4 info:', emp4.disEmployeeInfo());
console.log('emp4 annual salary:', emp4.calculateEmpAnnualSal());