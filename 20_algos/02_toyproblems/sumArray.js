/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

 const sumArray = (arr) => {
 	let maxSum = Number.NEGATIVE_INFINITY;
 	let currentSum = 0;

 	for(const val of arr){
 		currentSum += val;
 		if(currentSum > maxSum){
 			maxSum = currentSum;
 		}
 		if(currentSum < 0){
 			currentSum = 0;
 		}
 	}
 	return maxSum;
 }

 console.log(sumArray([1, 2, 3]));//6
 console.log(sumArray([1, 2, 3, -4]))//6
 console.log(sumArray([1, 2, 3, -4, 5]))//7
 console.log(sumArray([4, -1, 5]))//8
 console.log(sumArray([10, -11, 11]))//11