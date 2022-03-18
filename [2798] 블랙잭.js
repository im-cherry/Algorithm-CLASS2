// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const NM = INPUT[0].split(" ");
const cards = INPUT[1].split(" ");

// 알고리즘
const N = +NM[0],
  M = +NM[1];

const playerCards = new Array(3); // 3장의 카드
let sum = 0; // 카드 3장의 합
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      playerCards[0] = +cards[i];
      playerCards[1] = +cards[j];
      playerCards[2] = +cards[k];

      let tmpSum = playerCards.reduce((pre, current) => {
        return pre + current;
      }, 0); // 3장의 카드 합 구하기

      if (tmpSum <= M && M - sum > M - tmpSum) sum = tmpSum; // M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합
    }
  }
}

// 출력하기
console.log(sum);
