// iterate through each element
// call the function on each element

Array.prototype.myMap = function(callback){
    let newArray = [];
    for (let i= 0; i < this.length; i ++) {
        newArray.push(callback(this[i]));
    }
    return  newArray;
}

const arr = [1,2,3,4]
const arr2 = arr.myMap(el => el * 2)
console.log(arr2)