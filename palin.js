function largePal() {

var max = 0;
for (var i = 999; i > 100; i--){
    for (var j = i; j > 100; j--){
      var num = j * i;
      	if(palinCheck(num) && num > max) {
        	max = i * j;
      }
    }
  }
return max;
}

 function palinCheck(i) {
    i = "" + i;
    return i === i.split("").reverse().join("");
  }

console.log(largePal());

// Grabbing the largest palindrome made from two 3-digit numbers.
// Using a palinCheck function to first convert the integers to a string,
// then split the string, reverse, and join it to see if the numbers match
// up. Rest is pretty self explanatory 
