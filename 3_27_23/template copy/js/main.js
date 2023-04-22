// function squareDigits(num){
//     let str = num.toString()
//     let splitStr = str.split('')
//     let splitNum = splitStr.map(x => String(parseInt(x)*parseInt(x)))
//     let final = splitNum.join('')
//     return final;
//   }
//   console.log(squareDigits(51))

function highAndLow(numbers){
  let split = numbers.split(' ')
  let sorted = split.sort((a,b) => a - b)
  let newArr = sorted[0] + ' ' +  sorted.length-1
  

  return newArr
}
console.log(highAndLow('1 2 3 4 5'))