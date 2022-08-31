reverse a string in JS

let str = "Aditya";
let strReversed = '';
for(let i=str.length-1; i <= 0; i --) {
	strReversed.concat(str[i])
}
---------------------------------------------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);        
}

output ?

2
2
2
----------------------------------------------------------
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);        
}

0
1
2

----------------------------------------------

function1(2);
function2(3);

var function2 = function(number){
  for(var i=0; i< number; i++) {
    console.log(i);
  }
}

function function1(number){
  for(var i=0; i< number; i++) {
    console.log(i);
  }
}

output: 
-----------------------------------------------

function1(2)

0
1
2
0
1
2
3
--------------------------------------------
console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");

Output: 
first
third
second
-----------------------------------------


var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2);

output: false
-------------------------------------

typeof( typeOf 10)

string
-----------------------------------
function logMessage() {
  console.log(this.message); 
}
const object = {
  message: 'Hello, World!'
};

const data = logMessage.call(object);





commonModule
	--show-profuct.service.ts						--abstract

AppModule1
	--show-profuct.service.ts

AppModule2
	--show-profuct.service.ts
  
AppModule3
	--show-profuct.service.ts


NgModule()
class AppModuel1 {
	providers: [
  	showProductService
  ]
}

NgModule()
class AppModuel2 {
	providers: [
  	showProductService
  ]
}

NgModule()
class AppModuel3 {
	providers: [
  	showProductService
  ]
}

--show-profuct.service.ts

Injectable({ provideIn: "root"})
class showProductService {
	public updateProducts() {
  	
  }
}

