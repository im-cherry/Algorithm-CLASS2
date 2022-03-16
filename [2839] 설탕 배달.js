// 입력 받기
const N = +require("fs").readFileSync("/dev/stdin");

// 알고리즘
let result = -1;
for (let bag5 = Math.floor(N / 5); bag5 >= 0; bag5--) {
  let remain = N - 5 * bag5; // 남은 설탕 kg 수

  if (remain % 3 == 0) {
    result = bag5 + Math.floor(remain / 3); // 5kg 봉지수 + 3kg 봉지수
    break;
  }
}

// 출력하기
console.log(result);
