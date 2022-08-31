// Find the largest and smallest number in a given array
// https://medium.com/javarevisited/20-array-coding-problems-and-questions-from-programming-interviews-869b475b9121

let array = [4,2,1,8,9,10,6, 12]

largestAndSmallestNum = function(array) {
    let largestNum = array[0];
    let smallestNum = array[0];

    array.forEach(el => {
        if(el > largestNum) {
          largestNum = el
      } else if (el < smallestNum) {
          smallestNum = el
      }
    })
    return [smallestNum, largestNum];
}

console.log(largestAndSmallestNum(array))