// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr) {

//  CODE INSIDE HERE   //
	var reduceTotal = 0;

	console.log('Hello?');
	for (var i = 0; i < arr.length; i++) {
		reduceTotal += arr[i];
	}
	return reduceTotal;
}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
