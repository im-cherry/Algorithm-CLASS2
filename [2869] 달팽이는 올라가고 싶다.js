// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const A = +INPUT[0]; // 낮에 A미터 올라감
const B = +INPUT[1]; // 밤에 B미터 미끄러짐
const V = +INPUT[2]; // 나무 막대 높이 V미터

// 알고리즘
let answer = Math.ceil((V - B) / (A - B));

// 출력하기
console.log(answer);
