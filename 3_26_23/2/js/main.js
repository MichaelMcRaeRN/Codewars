function disemvowel(str) {
    let splitStr = str.split('')
    let noVowelArr = splitStr.filter(vowel =>  vowel !== 'a' && vowel !== 'i' && vowel !== 'e' && vowel !== 'o' && vowel !== 'u' && vowel !== 'A' && vowel !== 'I' && vowel !== 'E' && vowel !== 'O' && vowel !== 'U')
              
    let noVowel = noVowelArr.join('')
    
    return noVowel;
  }
  console.log(disemvowel('blaheiou'))