/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr) {
    return new Promise(function (resolve, reject) {
        console.log("Sum called ... ");
        if (arr.length === 0) {
            reject("Cannot sum an empty array");
        }
        /** schedule the execution of the function to the next event loop cycle.
         * This is done using setTimeout() to simulate an asynchronous operations.
         *
         * Replace the logic in the setTimeout() with the actual logic to sum the numbers
         * to understand the difference in execution with and without setTimeout()
         **/
        setTimeout(function () {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    console.log("Adding ".concat(arr[i][j], " to sum"));
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log("returning from sum");
    });
}
// Example usage:
var array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
var sumPromise1 = sum2DArray(array2D);
console.log("sumPromise1:", sumPromise1);
var sumPromise2 = sum2DArray([]);
console.log("sumPromise2:", sumPromise2);
