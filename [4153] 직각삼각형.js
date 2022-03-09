// 입력받기
const INPUT = require("fs").readFileSync("./input.txt").toString().split("\n");

// 알고리즘
let result = "";
for (const line of INPUT) {
  if (line === "0 0 0") break;

  let arr = line.split(" ").sort((a, b) => a - b);

  // 출력하기
  console.log(
    arr[0] * arr[0] + arr[1] * arr[1] == arr[2] * arr[2] ? "right" : "wrong"
  );
}
