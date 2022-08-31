const arr = [1,3,3, [8,9] ,4,5,0]
arr.forEach((el, index) => {
	if(el.length) {
  let indexToAdd = index;
  	for(let i = 0; i <el.length; i ++) {
      arr.splice(indexToAdd, i, el[i])
      indexToAdd ++;
    }
  }
})

console.log(arr)