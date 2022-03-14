// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
for (const number of INPUT) {
  if (number == 0) break;

  // 출력하기
  console.log(
    number.trim() == number.trim().split("").reverse().join("") ? "yes" : "no"
  );
}
