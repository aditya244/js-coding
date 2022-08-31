// Find a missing number in a given integer array of 1 to 100.

// algo
//  sort the array first
//  loop through each elements of an array 
//  check if the current index and next index element differnce is 1
//  if difference is more than 1 
//  return the element + 1

// taking array with intergers 1 to 10

var intergers = [1,2,3,4,5,6,7,9,10];

let missingNum;

findMissingNum = function(intergers) {
    let counter = 1;
    intergers.forEach(el => {
        if(counter !== el) {
            missingNum = counter
        } else {
            counter ++;
        }
    })
    return missingNum
}

console.log(findMissingNum(intergers));