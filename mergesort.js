function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	
	arr = split(arr);
	var x = merge(mergeSort(arr[0]), mergeSort(arr[1]));
	return x;
}

function split(wholeArray) {
	var x = Math.ceil(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0, x);
	var secondHalf = wholeArray.slice(x);

	return [firstHalf, secondHalf];
}


function merge(arr1, arr2) {
	var first = arr1.slice(0),  second = arr2.slice(0);
	var output = [];
	
	while (true) {
		if (first.length === 0) {
			output = output.concat(second);
			break;
		}
		if (second.length === 0) {
			output = output.concat(first);
			break;
		}
		if (first[0] <= second[0]) {
			output.push(first[0]);
			first.splice(0, 1)
		} else {
			output.push(second[0]);
			second.splice(0, 1);
		}
	}
	
	return output;
}