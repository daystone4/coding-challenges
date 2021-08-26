// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
   // return str.split('').reverse().join('')

    ///////////////////////////////////////////////

    // let reversed = ''
    // for(let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i]
    // }
    // return reversed

    ////////////////////////////////////////////////

    // let reversed = ''
    // for(let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed
    // }
    //     return reversed

    //////////////////////////////////////////////////

    // let reversed = ''
    // for(let char of str) {
    //     reversed = char + reversed 
    // }

    // return reversed

    ////////////////////////////////////////////

    // let reversed = ''
    // str.split('').forEach((item) => {
    //     reversed = item + reversed
    // })
    // return reversed

    // FAVORITE METHOD RIGHT HERE - WE LOVE THE REDUCE METHOD

    return [...str].reduce((accumulator, currentValue) => currentValue + accumulator)
  }
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
    const reversedString = [...str].reduce((accumulator, currentValue) => currentValue + accumulator)
    // if(reversedString === str) {
    //   return true
    // } else {
    //   return false
    // }

    // return reversedString === str ? true : false

    return reversedString === str
  }
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
    const reversedInt = int.toString().split('').reverse().join('')
    // return Number(reversedInt)
    return parseInt(reversedInt) * Math.sign(int) // include sign
  }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {
    // const strArr = str.split(' ')
    // for(let i = 0; i < strArr.length; i++) {
    //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
    // }
    // return strArr.join(' ')
    
    //////////////////////////////////////

    return str
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ')
  }
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
    let maxNum = 0
    let maxChar = ''
   const strArr = Array.from(str)
   
   const charMap = new Map()

   strArr.forEach(char => {
     // set takes two parameters, a key and a value
     // has is a method we have on maps - returns a boolean indicating whether an element with the specified key exists or not
     // get is a method we have on maps - it returns the value of a key if there is one

     // BREAKDOWN
     // initially, count is set to 0, if character is not in the map, we take the character, set it to map, and set it's count to 1
     // if the character is there, we get the current value of the character, set that to count, and then increment by 1
     let count = 0
     if(charMap.has(char)) {
       count = charMap.get(char)
     }
     charMap.set(char, count + 1)
   })

  //  for(let char in charMap) {
  //    if(charMap[char] > maxNum) {
  //     maxNum = charMap[char]
  //     maxChar = char
  //    }
  //  }

   charMap.forEach((value, key) => {
     // if the value is greater than the maxNum variable, set the maxNum = to the value, the maxChar varaible will be that key
     if(value > maxNum) {
       maxNum = value
       maxChar = key
     }
   })

   return maxChar
    
  }
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
      if(i % 15 === 0) { // if its a multiple of 15 its a multiple of 3 and 5
        console.log('FizzBuzz')
      } else if(i % 3 === 0) {
        console.log('Fizz')
      } else if(i % 5 === 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }
  }
  
  
  
  // CALL FUNCTION
  // const output = reverseString('hello');
  // const output = isPalindrome('hello')
  // const output = reverseInt(3521)
  // const output = capitalizeLetters('I love lucy')
  // const output = maxCharacter('javascript')
  const output = fizzBuzz()

  
  console.log(output);