// have implemented -
//  constructor
//  prototype
//  object.create() method

var Employee = function(salary, empId, yoj) {
	this.salary = salary;
  this.empId = empId;
  this.yoj = yoj;
}

Employee.prototype.getSalary =  function(){
	return this.salary;
}

var emp1 = new Employee(20000, 1293, 2019);

var SupportEmp = function(salary, empId, yoj, proj) {
	Employee.call(this, salary, empId, yoj);
  this.proj = proj;
}

SupportEmp.prototype = Object.create(Employee.prototype);

var supEmp1 = new SupportEmp(10000, 78987, 2019, 'LIC');

console.log(emp1.getSalary())
console.log(emp1)
console.log(supEmp1)
console.log(supEmp1.getSalary())

console.log(Object.getPrototypeOf(emp1))