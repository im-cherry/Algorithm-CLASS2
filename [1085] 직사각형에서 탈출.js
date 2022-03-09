// 입력받기
const INPUT = require("fs").readFileSync("./input.txt").toString().split(" ");
const x = +INPUT[0];
const y = +INPUT[1];
const w = +INPUT[2];
const h = +INPUT[3];

// 알고리즘
const min = Math.min(x, y, w - x, h - y);

// 출력하기
console.log(min);
