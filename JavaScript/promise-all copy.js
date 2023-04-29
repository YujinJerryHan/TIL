function getBanana() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('🍌');
    }, 1000)
  })
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('🍎');
    }, 3000)
  })
}

function getOrange() {
  return Promise.reject(new Error('no orange'))
}

// 바나나와 사과를 같이 가지고 오기 배열에

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => {
        return [banana, apple];
      })
  )
  .then(console.log);
// 총 4초가 걸린다.

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행! (성공한 것만)

Promise.all([getBanana(), getApple()]) //
.then(fruits => console.log('all',fruits))
// 총 3초가 걸린다.

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()])
.then(fruit => console.log('race', fruit));
// race 🍌 가장 먼저 출력

// all-Settle - 실패하든 성공하든 배열로 묶어서 보내준다
Promise.allSettled([getBanana(), getApple(), getOrange])
.then(fruits => console.log('all-settle', fruits))
.catch(console.log);