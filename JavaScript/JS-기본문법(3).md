# 클래스 (Class)

### : ES6에 추가된 스펙

- 생성자 함수와 뭐가 다를까?
- class로 시작하며 내부에 생성자 함수가 있다
- class는 new 없이 실행할 수 없다

### : 상속 (extends)

```jsx
class car {
	constructor(color) {
		this.color = color;
		this.wheels = 4;
	}
	drive() {
		console.log('부릉부릉~');
}
	stop() {
		console.log('슽땁~!');
	}
}

class Bmw extends Car {
	park() {
		console.log('PARK')
	}
}

const z4 = new Bmw('blue')
```

### : 메소드 오버라이딩 (method overriding)

- 상속받은 클래스에 부모 클래스에 있는 메서드와 동일한 메서드를 정의하면 덮어쓰게 된다
- 부모의 메서드를 그대로 사용하면서 확장하고 싶다면 super 키워드 사용

```jsx
class Bmw extends Car {
	stop() {
		super.stop();
		console.log('OFF');
	}
}

z4.stop();
> 슽땁~!
> OFF
```

### : 생성자 오버라이딩

- 자식 클래스에 constructor가 없으면 JS 상에서 있는 것처럼 작동해준다
- 그래서 오버라이딩 시에 super()로 부모 클래스의 constructor를 실행해주어야 한다
- 자식클래스에도 동일한 인자를 받는 작업을 해주어야 한다.

```jsx
class Bmw extends Car {
	constructor(color) {
		super(color);
		this.navigation = 1;
}
	park() {
		console.log('PARK')
	}
}
```
<br><br><br>
# Promise

```jsx
const pr = new Promise((resolve, reject) => {
	// code
});
```

- resolve는 성공한 경우, reject는 실패한 경우 실행되는 함수
- 어떤 일이 완료된 후에 실행되는 함수를 callback함수라고 한다

```jsx
const pr = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('OK')		
}, 3000)
});
```

- then을 이용해서 resolve와 reject 처리

```jsx
pr.then(
	function(result){}, // 이행 되었을 때 실행. resolve의 'OK'값 들어옴.
	function(err){}, // 거부 되었을 때 실행
);
```

```jsx
pr.then(
	function(result){
		console.log(result + ' 가지러 가자!');
}, 
	function(err){
		console.log('다시 주문해주세요..')
}, 
);
```

### then 이외에 사용할 수 있는 것, catch finally

- catch는 reject의 경우 실행된다
- 더욱 가독성 좋음

```jsx
pr.then(
	function(result){}
).catch(
	function(err){}
)
```

- finally는 이행이든 거부든 처리가 완료되면 최종적으로 실행된다

```jsx
pr.then(
	function(result){}
).catch(
	function(err){}
).finally(
	function(){
		console.log('--- 주문 끝 ---')
	}
)
```

### 프로미스 체이닝 (Promise chaining)

```jsx
console.log('시작');
f1()
	.then((res) => f2(res))
	.then((res) => f3(res))
	.then((res) => console.log(res))
	.catch(console.log)
	.finally(()=>{
		console.log('끝')
});
```

### Promise.all

- 한번에 실행하여 편리하고 시간 절약
- 하나라도 reject 되면 에러 발생
- 하나의 정보라도 누락되면 페이지를 보여줄 수 없는 경우 사용

```jsx
Promise.all([f1(), f2(), f3()]).then((res) => {
	console.log(res);
});
```

### Promise.race

- 하나라도 완료되면 끝냄
- 용량이 큰 이미지들을 로딩할 때 하나라도 완료되면 그 이미지를 보여줄 때 사용
<br><br><br>
# async, await

### async

- promise chaining 형태로 작성하는 것보다 가독성 좋아짐
- async 붙여주면 항상 promise 반환

```jsx
asyne function getName() {
	return 'Mike'
}
```

### await

- async 함수 내부에서만 사용 가능

```jsx
async function showName() {
	const result = await getName('Mike');
	console.log(result);
}

console.log('시작');
shwName();
```

```jsx
async function order() {
	const result1 = await f1();
	const result2 = await f2(result1);
	const result3 = await f3(result2);
	console.log(result3);
	console.log('종료');
}
order();
```

- 순차적으로 실행중에 에러가 발생할 수 있다
- async await은 try-catch로 감싸준다

```jsx
async function order() {
	try{
		const result1 = await f1();
		const result2 = await f2(result1);
		const result3 = await f3(result2);
		console.log(result3);
	}catch (e) {
		console.log(e);
	}
	console.log('종료');
}
order();
```

# Generator

- 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
- 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분부터 이어서 실행
- function 옆에 `*`  내부에 `yield` 키워드 사용
- `yield`에서 함수의 실행을 멈출 수 있다

```jsx
function* fn() {
	console.log(1);
	yield 1;
	console.log(2);
	yield 2;
	console.log(3);
	console.log(4);
	yield 3;
	return 'finish';
}

const a = fn();
```

### next()

- 반환된 객체는 value와 done 프로퍼티를 갖는다
- value : yield 옆에 있는 값
- done : 함수가 끝났는지 나타냄

```jsx
a.next();
> 1
> {value: 1, done: false}

a.next();
> 2
> {value: 2, done: false}
```

- return()

```jsx
a.return('END');
> {value: 'END', done: true}
```

- throw()
- catch문이 실행됨

### iterable

- Symbol.iterator 메서드가 있다
- Symbol.iterator는 iterator를 반환해야 한다

### iterator

- next 메서드를 가진다
- next 메서드는 value와 done 속성을 가진 객체를 반환
- 작업이 끝나면 done은 true가 된다

<br><br><br><br>


출처 : [코딩앙마 유튜브](https://youtu.be/4_WLS9Lj6n4)