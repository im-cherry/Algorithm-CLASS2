// 입력받기
const INPUT = require("fs").readFileSync("./input.txt").toString().split(" ");
const N = +INPUT[0];
const K = +INPUT[1];

// 알고리즘 : n! / k!(n-k)!
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// 출력하기
console.log(factorial(N) / (factorial(K) * factorial(N - K)));
