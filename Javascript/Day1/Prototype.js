// Inheritence in JS (using .prototype)
//--------------------------------------

// Employee base Fn
//-----------------
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

// Manager child Fn 
//------------------
function Manager(deptId, deptName) {

  this.deptId = deptId;
  this.deptName = deptName;

  this.displayManagerInfo = function() {

    return this.disEmployeeInfo() + ' ' + ' DepartmentId: ' + this.deptId + ' DepartmentName: ' + this.deptName;
  }
}

const sagarEmp = new Employee(1111, 'Sagar Sharma', 95000.65);
Manager.prototype = sagarEmp;
let sagarManager = new Manager(777, 'Production & Manufacturing Dept');

console.log('type of sagarEmp:', typeof sagarEmp);
console.log('type of sagarManager:', typeof sagarManager);
console.log('Manager displayManagerInfo Fn:', sagarManager.displayManagerInfo());
console.log('Manager Annual Salary:', sagarManager.calculateEmpAnnualSal());

console.log('****************************************************************************')


