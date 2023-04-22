function catDogYears(humanYears) {
   
  
    let buddyYears= [humanYears]

   
    const catYearX = 4
    const dogYearX = 5
   if(humanYears === 1){
      buddyYears[1] = 15
      buddyYears[2] = 15
    }
    else if(humanYears === 2){
      buddyYears[1] = 24
      buddyYears[2] = 24
    }
    else if(humanYears >2){
      buddyYears[1] = 24 + (catYearX*(humanYears-2))
      buddyYears[2] = 24 + (dogYearX*(humanYears-2))
    }
    
    
   
 
    
    return buddyYears
  }
console.log(catDogYears(2))  