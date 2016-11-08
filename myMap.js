// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //
	console.log(myMap);
	var newArray = [];

	for (var i = 0; i < arr.length; i++) {
		console.log('Yo, ' +i);
		newArray.push(callback(arr[i]));
		}
		return newArray;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
