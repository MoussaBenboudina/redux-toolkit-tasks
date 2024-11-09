// 1 1 1 1

// let result = [];
// for (let i = 0; i < 8; i++) {
//   const binaryNumber = i.toString(2).padStart(3, "0");
//   result.push([...binaryNumber]);
// }

// console.log(result);

const result: string[][] = [];
const n = Math.pow(2, 3);

for (let i = 0; i < n; i++) {
  const binaryNum = i.toString(2).padStart(4, "0");
  result.push([...binaryNum]);
}

console.log(result);
