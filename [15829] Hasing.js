// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const L = +INPUT[0];
const STR = INPUT[1].split("");

// 알고리즘
const arr = STR.map((value, index, array) => {
  return STR[index].charCodeAt(0) - 96;
}); // 문자열 수열로 변환

// (a + b) mod n = { (a mod n) + (b mod n) } mod n
// (a * b) mod n = { (a mod n) * (b mod n) } mod n
const MUL = 31,
  MOD = 1234567891;
let sum = 0;
for (let i = 0, r = 1; i < L; i++, r = (r * MUL) % MOD) {
  let ar = (arr[i] * r) % MOD;
  sum %= MOD;

  sum = (sum + ar) % MOD; // 해시값 계산
}

// 출력하기
console.log(sum);
