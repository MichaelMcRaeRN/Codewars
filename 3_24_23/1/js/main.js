function positiveSum(arr) {
 let filteredArr = arr.filter(pos => pos > 0)
let reducedArr = filteredArr.reduce((acc,c) => acc + c, 0)
return reducedArr
}

positiveSum([1,2,3,4,-1])