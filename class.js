// have implemented 
// - class 
// - inheritence
// - method overriding

class Students{
	constructor(name, rollNo){
  	this.name = name;
    this.rollNo = rollNo;
  }
  
  getStudentDetails() {
  	return `Name is ${this.name} and Roll No is ${this.rollNo}`
  }
}

// super is used to 

var stud1 = new Students('Aditya', 24);

class CSstudents extends Students{
	constructor(name, rollNo, subj){
  	super(name, rollNo);
    
    this.subj = subj;
  }
  
  getStudentDetails(){
  	console.log('The method is overridden');
  }
}

var stud2 = new CSstudents('Aman', 24, 'JAVA')

console.log(stud2);
console.log(stud1);
console.log(stud2.getStudentDetails())

/* console.log(Students);
console.log(CSstudents); */