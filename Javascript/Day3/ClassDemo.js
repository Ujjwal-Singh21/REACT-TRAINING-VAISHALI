// Use the get and set keywords to define the JavaScript getters and setters for a class or an object.
// The get keyword binds an object property to a method that will be invoked when that property is looked up.
// The set keyword binds an object property to a method that will be invoked when that property is assigned.
//----------------------------------------------------------------------------------------------------------

class Employee {

  static empCount = 0;

  constructor() {

    console.log('Constructor invoked')
    
    this._empId_ = 0;
    this._empName_ = '';
    this.empSal = 0.0;
    Employee.empCount = Employee.empCount + 1;
    console.log('One Employee Instance Created')

  }

  get empId() {
    console.log('Employee Id getter Fn')
    return this._empId_;
  }

  set empId(empId) {
    console.log('Employee Id setter Fn')
    this._empId_ = empId;
  }

  get empName() {
    console.log('Employee Name getter Fn')
    return this._empName_;
  }

  set empName(empName) {
    console.log('Employee Name setter Fn')
    this._empName_ = empName;
  }

  getEmpSal() {
    console.log('Employee Salary getter Fn')
    return this.empSal;
  }

  setEmpSal(sal) {
    console.log('Employee Salary setter Fn')
    this.empSal = sal;
  }

  disEmployeeInfo() {

    return 'EmployeeId: ' + this.empId + ', EmployeeName: ' + this.empName + ', EmployeeSalaary: ' 
    + this.getEmpSal();
  }

  calculateEmpAnnualSal() {

    return ', Annual Salary: ' + this.empSal * 12;
  }

  static getEmployeeCount() {

    return 'Employee Count: ' + Employee.empCount;
  }
}

// Creating instances of Employee 
//-------------------------------

var employee1 = new Employee();

employee1.empId = 1001;
employee1.empName = 'Wanda Maximoff';
// employee1.empSal = 25000.0;
employee1.setEmpSal(25000)

console.log(employee1.disEmployeeInfo() + ' ' + employee1.calculateEmpAnnualSal());
console.log(Employee.getEmployeeCount())