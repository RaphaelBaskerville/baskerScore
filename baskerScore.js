//myEach takes in a list and a callback function
var myEach = function (list, callback){
	// if the list is an array
	if (Array.isArray(list)) {
		// iterate through each element in the list.
		for(var i = 0;i < list.length; i++) {
			// invoke the callback with the current element in the list.
			callback(list[i],i,list);
  	}
  	// if the list is not an element do a for in loop.
  } else {
    //iterate through each property in the list.  
  	for (var i in list) {
  		// invoke the callback function with the current property in the list.
  	    callback(list[i],i,list);
  	}
  }
};

var myMap = function (list, callback) {
// create an array to push into
	var arr = [];
// push the result from passing each item in the list to the callback into the push array.
	myEach(list, function(val,i) {
		arr.push(callback(val,i))
		
	});
// return the array.
	return arr;
}

// takes in a list and a predicate
var myFilter = function (list, boolFunc) {
	// define an array to push results into.
	var arr = [];
	// iterate through each element in the 
	myEach(list, function (val) {
		// pass in the current element of the list into the predicate function.
		// if it returns true, push the value into the results array.
		if (boolFunc(val)) arr.push(val);
		// return 
		return arr;
	});
}
// reduce takes in a list, callback and an optional starting point. 
var myReduce = function (list , callback, start) {
	// define total as the starting point or the 
	// first element of the list if no starting point was given.
	var total = start || list.shift();
	// iterate through the list
	myEach(list , function(val,key,list) {
		console.log("in each in reduce acc" , total, "val", val)
		// redefine total as the result from invoking the 
		// callback function with the current element of the list.
		total = callback(total, val);
		console.log(total)
	})
	// after iterating through the list, return the total.
	return total;

}

// console.log(myReduce([[1,2,3,4],[5,6,7]] , function (acc, arr) {

// 	sum = acc;
// 	myEach(arr, function(num){
// 		sum.push(num)
// 	})

// 	return sum;

// },[]))
