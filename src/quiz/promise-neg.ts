const array2D_3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

function negsInRow(arr: number[][], rowIdx: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (rowIdx < arr.length) {
      arr[rowIdx].filter((e) => {
        return e < 0;
      }).length > 0
        ? resolve(`Negatives found in row ${rowIdx}.`)
        : reject(`Negatives not found.`);
    } else {
      reject(`Row index ${rowIdx} out of bound.`);
    }
  });
}

let negRowPromises: Promise<string>[] = [];

for (let i = 0; i < array2D_3.length; i++) {
  negRowPromises.push(negsInRow(array2D_3, i));
}

Promise.any(negRowPromises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
