// var deepCount = 0
// function ArrayAdditionI(arr) { 
//   var arr = arr.sort(function(a,b){return a-b});
//   var largest = arr.pop();
//   var result = false;
//   var sums = [];
//   var onePerm = function(sum, i) {
//     deepCount++;
//     sum = sum || 0;
//     i = i || 0;
    
//     if (sum === largest) {
//       result = true;
//       return;
//     }
//     console.log("start loop starting at ", arr[i] ,'at i = ' , i);
//       for (; i < arr.length; i++) {
//       console.log(deepCount , "deep")
//       // console.log("arr[i]" , arr[i]);
//       old = sum;
//       sum += arr[i];
//       sums.push(sum);
//       console.log(old, "plus" ,arr[i] , 'equals', sum, "index1" , i)
//       console.log("calling one perm with " , sum ,' and ' , i+1)
//       onePerm(sum, i+1);
//       console.log ('resuming loop that started with ', arr[i])
//       console.log (deepCount , "deep")
//       old = sum;
//       sum -= arr[i];
//       sums.push(sum);
//       console.log(old, "minus" ,arr[i] , 'equals', sum, "index1" , i)
//       deepCount--;
//       console.log("end loop that started with" , arr[i])
//     }
//   };
  
//   onePerm();    
//   console.log()  
//   return result;
// }

// ArrayAdditionI([1,2,4,6]);


//all perms are a funky of the 70's

var arr = ["a","b","c","d","e","f"]
//stolen from a coderbyte solution 
//changed around a bit to work for letters instead of numbers.

//but this one gives you every combination of an array of letters
var allPerms = function (arr) {
  //create a results array
  var results = [];
  // define an inner function
  var myPerm = function (sum , i) {
    // loop through the letters in the array
    for (;i < arr.length; i++){
      //keep track of out accumulated string before concating 
      var old = sum;
      //concat arr[i] onto accumulated
      sum += arr[i];
      console.log(sum , arr[i])
      //push this accumulation into the results array
      results.push(sum);
      // pass the accumulation into a recursive call
      //pass in i+1 as a starting place for the recursive call's for loop
      myPerm(sum , i+1)
      //on each iteration, return the accumulation to its state at the 
      //begining of that iteration so each iteration of the for loop 
      //checks ONLY that value against everyother value.
      //or as the author of the original code vaguely put it...

      //checks all possibilities.
      sum = old;
    } 
  }
  myPerm("",0);
  return results;
}

console.log(allPerms(arr));
















