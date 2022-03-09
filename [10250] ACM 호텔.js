// 입력받기
const INPUT = require("fs").readFileSync("./input.txt").toString().split("\n");

/**
 * 알고리즘
 * N번째로 도착한 손님에게 배정될 번호 계산하기
 */
const T = +INPUT[0]; // 테스트 케이스 수
for (let t = 1; t <= T; t++) {
  const [H, W, N] = INPUT[t].split(" "); // 호텔의 층 수, 각 층의 방 수, 몇 번째 손님

  let h = N % H ? N % H : H;
  let w = Math.ceil(N / H);

  // 출력하기
  console.log(`${h}${w > 9 ? w : "0" + w}`);
}
