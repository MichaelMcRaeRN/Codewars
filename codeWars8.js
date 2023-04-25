function isDivisible(n, x, y) {
    if ((n % x == 0)&&(n % y == 0)){
      return true
    }
    else{
      return false}
    
  }

  function filter_list(l) {
    return l.filter((element) => typeof element === 'number')
    // Return a new array with the strings filtered out
  }