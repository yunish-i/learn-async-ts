const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rowIdx < arr.length) {
        let sum = 0;
        console.log(`Calculating the summation of row ${rowIdx}`);
        for (let i = 0; i < arr.length; i++) {
          sum += arr[rowIdx][i];
        }
        resolve(sum);
      } else {
        reject(`Row index should be within 0 and ${arr.length}`);
      }
    }, 0);
  });
}

let rowSumPromises: Promise<number>[] = [];

for (let i = 0; i < array2D_1.length; i++) {
  rowSumPromises.push(sumOfARow(array2D_1, i));
}

// Do not use async await
// Promise.all(rowSumPromises)
//   .then((rowSums) => {
//     let sum = 0;
//     rowSums.forEach((rowSums) => {
//       sum += rowSums;
//     });
//     console.log(`Sum: ${sum}`);
//   })
//   .catch((err) => console.log(`Error: ${err}`));

//Use async await
async function getSum(): Promise<void> {
  try {
    const rowSums = await Promise.all(rowSumPromises);
    let sum = 0;
    rowSums.forEach((rowSums) => {
      sum += rowSums;
    });
    console.log(`Sum: ${sum}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

getSum();
