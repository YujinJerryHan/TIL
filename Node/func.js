const {odd, even} = require('./var'); // require 함수 안에 불러올 모듈의 경로 작성

function checkOddOrEven(num) {
  if (num % 2) { // 나머지가 0이 아닐 때(홀수)
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;