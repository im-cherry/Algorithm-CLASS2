// 입력받기
const N = require("fs").readFileSync("/dev/stdin");

// 알고리즘
let result = N - N.length * 9;
while (result < N) {
  let M = result
    .toString()
    .split("")
    .reduce((previousValue, currentValue) => {
      return +previousValue + +currentValue;
    }, +result);

  if (M == N) break;
  result++;
}

// 출력하기
console.log(result == N ? 0 : result);
