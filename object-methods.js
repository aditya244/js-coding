// Methods for objects
// Object.create
// Object.keys
// Object.values
// Object.entries
// Object.assign
// Object.freeze
// Object.seal

var obj1 = {
	'name': 'Aditya',
  'occupation': 'Software Engineer',
 	getDetails(){
  	return `Name is ${name}, and occupation is `
  }
};

var obj = Object.create(obj1);
console.log(obj.getDetails())
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

var empDetails = {
	'name': 'Aditya',
  'age': 24,
}

var empFinDetails = {
	'salary': 26000,
  'city': 'Pune'
}

var empTotalDetails = Object.assign(empDetails, empFinDetails);


console.log(empTotalDetails)