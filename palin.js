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
