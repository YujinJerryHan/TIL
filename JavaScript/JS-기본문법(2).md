# 구조 분해 할당 (Destructuring assignment)

- 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
- 배열 구조 분해
  ```jsx
  let [x, y] = [1, 2];

  console.log(x); // 1
  console.log(y); // 2

  //1
  let users = ['Mike', 'Tom', 'Jane'];
  let [user1, user2, user3] = users;

  //2
  let user1 = users[0];
  let user2 = users[1];
  let user3 = users[2];

  //3
  let str = 'Mike-Tom-Jane';
  let [user1, user2, user3] = str.split('-');

  console.log(user1); // 'Mike'
  console.log(user2); // 'Tom'
  console.log(user3); // 'Jane'
  ```
- 배열 구조 분해 : 기본값
  ```jsx
  let [a, b, c] = [1, 2]; // c가 undefined!

  let [a = 3, b = 4, c = 5] = [1, 2];

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 5. c의 기본값인 5가 그대로 유지
  ```
- 배열 구조 분해 : 일부 반환값 무시
  ```jsx
  let [user1, , user2] = ['Mike', 'Tom', 'Jane', 'Tony'];

  console.log(user1); // 'Mike'
  console.log(user2); // 'Jane'
  ```
- 배열 구조 분해 : 바꿔치기
  ```jsx
  let a = 1;
  let b = 2;

  [a, b] = [b, a];
  ```
- 객체 구조 분해
  ```jsx
  let user = { name: 'Mike', age: 30 };

  let { name, age } = user; // 객체 구조 분해는 순서가 상관 x

  console.log(name); // 'Mike'
  console.log(age); // 30
  ```
- 객체 구조 분해 : 새로운 변수 이름으로 할당
  ```jsx
  let user = { name: 'Mike', age: 30 };

  let { name: userName, age: userAge } = user;

  console.log(userName); // 'Mike'
  console.log(userAge); // 30
  ```
- 객체 구조 분해 : 기본값(객체로부터 받은 값이 undefined일 때만)
  ```jsx
  let user = { name: 'Mike', age: 30 };

  let { name, age, gender = 'male' } = user;

  let { name, age = 19, gender = 'male' } = user;
  console.log(age); // 30
  ```

<br><br><br>

# 나머지 매개변수, 전개 구문 (Rest parameters, Spread syntax)

- 자바 스크립트에서 함수에 넘겨주는 인수의 개수는 제한이 없다

```jsx
function showName(name) {
  console.log(name);
}

showName('Mike', 'Tom'); // 'Mike'
showName(); // undefined. 에러는 발생하지 x
```

- 함수의 인수를 얻는 법 2가지 : arguments, 나머지 매개변수
- arguments
  - 함수로 넘어 온 모든 인수에 접근
  - 함수 내에서 이용 가능한 지역 변수
  - length, index
  - Array 형태의 객체
  - 배열의 내장 메서드 없음 (forEach, map 사용 x)

## 나머지 매개변수

- arguments보다 나머지 매개변수를 사용 권장
- 정해지지 않은 개수의 인수를 배열로 나타낸다
- 나머지 매개변수는 마지막에 있어야 한다

```jsx
function showName(...names) {
  console.log(names);
}

showName(); // []
showName('Mike'); // ['Mike']
showName('Mike', 'Tom'); // ['Mike', 'Tom']
```

```jsx
// user 객체를 만들어 주는 생성자 함수

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Claus', 23, 'html', 'css');
const user2 = new User('Jerry', 45, 'JS', 'React');
const user3 = new User('Joy', 29, 'Eng');
```

## 전개 구문(Spread syntax) : 배열

```jsx
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [0, ...arr1, ...arr2, 7, 8, 9];
// [0,1,2,3,4,5,6,7,8,9]
```

- arr1을 [4, 5, 6, 1, 2, 3] 으로
  ```jsx
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  arr2.reverse().forEach((num) => {
    arr1.unshift(num);
  }); // 우 복잡스러

  // 전개 구문 활용
  arr1 = [...arr2, ...arr1];

  console.log(arr1); //[4, 5, 6, 1, 2, 3]
  ```

<br><br><br>

# 클로저 (Closure)

- 자바스크립트는 어휘적 환경 (Lexical Enviroment)을 갖는다
- 함수와 렉시컬 환경의 조합
- 함수가 생성될 당시의 외부 변수를 기억
- 생성 이후에도 계속 접근 가능
  <br><br><br>

# setTimeout / setInterval

- setTimeout : 일정 시간이 지난 후 함수를 실행

```jsx
function fn() {
  console.log(3);
}

setTimeout(fn, 3000);

// 인수가 필요할 경우 시간 뒤에 기입
function showName(name) {
  console.log(name);
}

setTimeout(showName, 3000, 'Mike');
치;
```

- clearTimeout() : 예정된 작업을 없앰
- setInterval : 일정 시간 간격으로 함수를 반복
- clearInterval()
  <br><br><br>

# call, apply, bind

- 함수 호출 방식과 관계없이 this를 지정할 수 있음

## call

- call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.

```jsx
const mike = {
  name: 'Mike',
};

function showThisName() {
  console.log(this.name);
}

showThisName.call(mike); // Mike

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, 'singer');
console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}
```

## apply

- 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다
- call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다

```jsx
const mike = {
  name: 'Mike',
};

function showThisName() {
  console.log(this.name);
}

showThisName.call(mike); // Mike

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.apply(mike, [1999, 'singer']);
console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}ㅁㅁ
```

- apply는 ‘배열’요소를 함수 매개변수로 사용할 때 유용

```jsx
const nums = [3, 10, 1, 6, 4];

// call과 apply 사용법 (동일한 결과)
const minNum = Math.min.apply(null, nums);
const minNum = Math.min.call(null, ...nums);
```

## bind

- 함수의 this 값을 영구히 바꿀 수 있다.

<br><br><br>

# 상속, prototype

```jsx
const car = {
	wheels: 4,
	drive() {
		console.log("drive..");
},
};

const bmw = {
	color: 'red'
	navigation: 1,
};

const benz = {
	color: 'black'
};

const audi = {
	color: 'blue'
};

bmw.__proto__ = car; // car가 bmw의 prototype이 됨 = bmw는 car에게 상속됨
benz.__proto__ = car;
audi.__proto__ = car;

const x5 = {
	color: 'white',
	name: 'x5',
};

x5.__proto__ = bmw;
```

- x5에서 값을 찾고, 없으면 bmw에서 찾는다
  <br><br><br><br><br>

출처 : [코딩앙마 유튜브](https://youtu.be/4_WLS9Lj6n4)
