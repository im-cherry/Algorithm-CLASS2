// 입력받기
const N = require("fs").readFileSync("./input.txt");

// 알고리즘
let r = 0;
let sum = 2;
do {
  sum += 6 * r++;
} while (sum <= N);

// 출력하기
console.log(r);
