// returns a new array
// iterates through each element in the array
// checks a condition and then push to a new array

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for(let i=0; i < this.length; i ++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
};

let arr = [1,2,3,4,5,6];

let arr2 = arr.myFilter(el => el > 4)

console.log(arr2)