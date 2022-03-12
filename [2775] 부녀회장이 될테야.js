// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = INPUT[0] * 2; // 테스트 케이스 수

// 알고리즘 : 1층 1호 부터 k층 n호까지 사람 수 구해서 배열에 저장하기
let apartArr = [Array.from({ length: 15 }, (_, i) => i)]; // [0, 1, 2, 3, 4, ..., 14]
for (let k = 1; k < 15; k++) {
  let tempArr = [0, 1];
  for (let n = 2; n < 15; n++) {
    tempArr.push(tempArr[n - 1] + apartArr[k - 1][n]);
  }
  apartArr.push(tempArr);
}

// 출력하기
let t = 1;
while (t <= T) {
  let k = +INPUT[t++]; // k층
  let n = +INPUT[t++]; // n호

  console.log(apartArr[k][n]);
}
