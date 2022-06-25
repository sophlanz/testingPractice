
function capitalize (string) {
    let firstLetter = string.charAt(0).toUpperCase();
    let rest = string.substring(1);
    let caps = firstLetter + rest;
    return caps;
}
module.exports = capitalize;

function reverseString (string){
    let reverse = string.split('').reverse().join("");
    return reverse
}
module.exports = reverseString;

const calculator = {
    addition: {
            add: function(a,b) {return a+b}
    },
    subtraction: {
            subtract: function(a,b) {return a-b}
    },
    division:{
            divide: function(a,b) {return a/b}

    },
    multiplication:{
            multiply: function(a,b) {return a*b}
    }
};
module.exports=calculator;

//caesar cipher
function caesarCipher (string,shift) {
    let cipher = [ ];
   
  //loop through string, and get charcode
  for(let i=0;i<string.length;i++){
      let charCode = string.charCodeAt(i);
      console.log(charCode);
      //make sure it's a lowercase letter, and not whitespace
      if(charCode > 96 && charCode<123) {
        //add shift of charcode
      charCode = charCode + shift;
      //incase the code is greater that 122, subrtact 122 and add 96, to get back to the beginning of alphabet
      if(charCode > 122) {
          charCode= (charCode-122) +96;
      }
      //convert charCode to its new letter and push to array 
      let letter = String.fromCharCode(charCode);
      cipher.push(letter);
      } else {
          //push the whitespace
          cipher.push(" ");
      }
  }
  //join all of the letters pushed to array
  cipher = cipher.join('');
  return cipher

};
module.exports= caesarCipher;

function analyzeArray(array){
    //initialize 
    let max= array[0]
    let min = array[0]
    let average = 0;
    let sum = 0;
    let object = { };
    //length
    const length = array.length;
    //loop through numbers to get average, min, and max
    for(let i=0; i<length;i++) {
        //get max
        if(max<array[i]) {
            max = array[i];
        } 
        //get min
        if(min>array[i]){
            min = array[i];
        }
        //get sum for average
        sum = sum + array[i]
    }
    console.log(sum)
    //calculate average
    average = sum / length;
    object = {
        average: average,
        min: min,
        max: max,
        length: length
    }
    return object;
}
module.exports = analyzeArray;