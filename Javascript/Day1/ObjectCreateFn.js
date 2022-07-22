// Inheritence is JS using Object.create() fn 
//-------------------------------------------

// Base Employee object
//---------------------
const emp = new Object();

emp.empId = 4000;
emp.empName = 'Krishna';
emp['empSal'] = 66000.00;

emp.disEmployeeInfo = function() {

  return 'EmployeeId: ' + this.empId + ', EmployeeName: ' + this.empName + ', EmployeeSalaary: ' 
  + this.empSal;
}

emp.calculateEmpAnnualSal = function() {

  return this.empSal * 12;
}

// Child Manager object 
//---------------------
let krishnaManager = Object.create(emp); 

krishnaManager.deptId = 10;
krishnaManager.deptName = 'Visuals and Graphics';

krishnaManager.displayManagerInfo = function() {

  return this.disEmployeeInfo() + ' ' + ' DepartmentId: ' + this.deptId + ' DepartmentName: ' + this.deptName;
}

console.log('emp Object:', emp)
console.log('Krishna manager Object:', krishnaManager)
console.log('Manager Information:', krishnaManager.displayManagerInfo())
console.log('Annual Salary of Manager:', krishnaManager.calculateEmpAnnualSal())
