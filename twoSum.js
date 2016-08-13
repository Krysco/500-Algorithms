function twoSum (arr, target){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      var x = arr.indexOf(arr[i]);
      var y = arr.indexOf(arr[j]);
	newArr.push(x,y);
          return newArr;
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);

// Determining which two numbers in an array equal the given number.
