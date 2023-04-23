# 변수(variable)

## 변수의 생성과정

1. 선언 단계
2. 초기화 단계
3. 할당 단계

## var

- 1)선언 + 초기화 단계 → 2) 할당 단계
- 한번 선언된 변수를 다시 선언할 수 있다.
  ```jsx
  var name;
  console.log(name); // undefined
  name = 'Mike'; // 할당
  ```
- 선언하기 전에 사용할 수 있다. (아래 경우, 선언은 호이스팅 되지만 할당은 호이스팅 되지 x)
- 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
- var : 함수 스코프 (function-scoped) - 함수에서 선언한 변수들은 해당 함수 내에서만 접근할 수 있다

```jsx
const age = 30;
if (age > 19) {
  var txt = '성인';
}
console.log(txt); // 성인. if문 밖에서도 사용 가능

function add(num1, num2) {
  var result = num1 + num2;
}
add(2, 3);
console.log(result); // error. 함수 밖을 벗어나서 사용 x
```

## let

- 1. 선언 단계 → 2) 초기화 단계 → 3) 할당 단계
- let과 const는 TDZ의 영향을 받는다. 할당하기 전에 사용할 수 없다.
- let과 const : 블록 스코프(block-scoped) - 블록 `{}`(함수, if문, for문, while문, try/catch문 등) 이 생성될 때마다 새로운 스코프가 형성되는 것

## const

- 1. 선언 + 초기화 + 할당. 한번에
     <br><br><br>

# 생성자 함수

- 함수의 첫 글자는 대문자

```jsx
function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 32);
let user3 = new User('Tom', 17);
```

<br><br><br>

# 객체 메소드, 계산된 프로퍼티

## Computed property

```jsx
let a = 'age';

const user = {
  name: 'Mike',
  [a]: 30, // age : 30
}; // -> computed property(계산된 프로퍼티)

const user =
  {
    [1 + 4]: 5,
    ['안녕' + '하세요']: 'Hello',
  } > { 5: 5, 안녕하세요: 'Hello' };
```

<br><br><br>

## Object - methods

- Object.assign() : 객체 복제
  ```jsx
  const user = {
    name: 'Mike',
  };
  const info1 = {
    age: 30,
  };
  const info2 = {
    gender: 'male',
  };
  Object.assign(user, info1, info2);
  ```
- Object.keys() : 키 배열 반환
- Object.values() : 값 배열 반환
- Object.entries() : 키/값 배열 반환
- Object.fromEntries() : 키/값 배열을 객체로
  <br><br><br>

# Symbol

- 유일한 프로퍼티를 추가하고 싶을 때 사용한다.
- 유일한 심볼

```jsx
const a = Symbol(); // new를 붙이지 않는다.
```

- property key : 심볼형

  ```jsx
  const id = Symbol('id');
  const user = {
  	name : 'Mike',
  	age : 30,
  	[id] : 'myid'
  }

  user
  > {name : 'Mike', age : 30, Symbol(id) : 'myid'}

  user[id] // 'myid'

  Object.keys(user); // ['name', a'ge'].
  // keys, values, entries, for..in은 symbol을 건너뛴다.

  ```

- Symbol.for() : 전역 심볼

  - 하나의 심볼만 보장받을 수 있음
  - 없으면 만들고, 있으면 가져오기 때문
  - Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
  - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

  ```jsx
  const id1 = Symbol.for('id');
  const id2 = Symbol.for('id');

  id1 === id2; < true
  ```

- 숨겨진 Symbol key 보는 법
  ```jsx
  const id = Symbol('id');
  const user = {
  	name : 'Mike',
  	age: 30,
  	[id] : 'myid'
  }
  object.getOwnPropertySymbols(user); >[Symbol(id)]
  Reflect.ownKeys(user); > ['name', 'age', Symbol(id)]ㅇ
  ```

<br><br><br>

# Number, Math

- toString()

  - 10진수 → 2진수/16진수

  ```jsx
  let num = 10;

  num.toString(); // "10"
  num.toString(2); // "1010"

  let num2 = 255;
  num2.toString(16); // "ff"
  ```

- Math

  - Math.ceil() : 올림
  - Math.floor() : 내림
  - Math.round() : 반올림
  - Math.random() : 0~1 사이 무작위 숫자 생성
  - Math.abs()
  - Math.min()
  - Math.max()
  - Math.pow(n, m) : n의 m제곱
  - Math.sqrt(): 제곱근
  - toFixed() : 소수점 자릿수. 문자열 반환

    ```jsx
    // 요구사항 : 소수점 둘째자리까지 표현 (셋째 자리에서 반올림)
    // 1. 100을 곱함 2.Math.round반올림 3.100으로 나눔
    let userRate = 30.1234;
    Math.round(userRate * 100) / 100; // 30.12

    // toFixed() 활용
    userRate.toFixed(2); // 소수점 둘째자리까지 표현! >"30.12"
    userRate.toFixed(0); // 정수부분만 남음. >"30"
    userRate.toFixed(6); // 소수 갯수보다 크면 0으로 채움. >"30.123400"

    //문자열로 반환받은 것을 숫자로 변환
    Number(userRate.toFixed(2)); // 30.12
    ```

  - isNaN() : 숫자인지 아닌지 판단 ‘숫자가 아니니?’ true → NaN이라는 뜻
  - parseInt() : 문자열을 숫자로 바꿔줌. Number()와 다른 점은 문자와 숫자가 혼용되어 있어도 변환 가능

    ```jsx
    let margin = '10px';

    parseInt(margin); // 10. 변환 가능한 부분까지 변환해줌 px는 짤라버림
    Number(margin); // NaN

    let redColor = 'f3';
    parseInt(redColor); // NaN. 문자로 시작하면 NaN 출력

    parseInt(redColor, 16); //243
    parseInt('11', 2); // 3
    ```

  - parseFloat() : 소수점까지 반환

<br><br><br>

# String 메서드

- length
- toUpperCase(), toLowerCase()
- str.indexOf(text) : 문자를 인수로 받아 몇 번째 인덱스에 위치하는지 반환
- str.slice(n, m) : 특정 범위의 문자만 뽑는다
- str.substring(n, m) : n과 m사이 문자열 반환. n과 m을 바꿔도 동작함. 음수는 0으로 인식
- str.substr(n, m) : n부터 시작해서 m개를 가져옴
- str.trim() : 앞뒤 공백 제거
- str.repeat(n) : n번 반복
  <br><br><br>

# Array 메서드

- push() : 뒤에 삽입
- pop() : 뒤에 삭제
- unshift() : 앞에 삽입
- shift() : 앞에 삭제
- arr.splice(n, m) : n부터 m개 지워라
- arr.splice(n, m, x) : 특정 요소 지우고 추가
  ```jsx
  let arr = ["나는", "영희", "입니다"];
  arr.splice(1, 0, "대한민국", "소방관"); // 0개 지움
  > 나는 대한민국 소방관 영희 입니다
  ```
- arr.splice() : 삭제된 요소 반환
- arr.slice(n, m) : n부터 m까지 반환 (m포함하지 x). 인자를 주지 않으면 복제함
- arr.concat(arr2, arr3 ..) : 합쳐서 새배열 반환
- arr.forEach(fn) : 배열 반복

  ```jsx
  let users = ['Mike', 'Tom', 'Jane'];

  users.forEach((item, index, arr) => {
    //..
  });
  ㅁㄱ;
  ```

- arr.indexOf / arr.lastIndexOf
- arr.includes() : 포함하는지 확인
- arr.reverse() : 역순으로 재정렬
- arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
- .isArray() : 인자가 배열인지 판별. true/false
- arr.sort() : 배열 재정렬, 배열 자체가 변경되니 주의, 인수로 정렬 로직을 담은 함수를 받음

  ```jsx
  let arr = [24, 100, 4, 15];

  function fn(a, b) {
    return a - b;
  }

  arr.sort(fn);

  console.log(arr); // [4, 15, 24, 100]
  ```

- arr.reduce() : 인수로 함수로 받음.

  - (누적 계산값, 현재값) ⇒ { return 계산값 };

  ```jsx
  let arr = [1, 2, 3, 4, 5];

  //forEach()
  let result = 0;
  arr.forEach((num) => {
    return (num += num);
  });
  console.log(result); // 15

  //reduce()
  const result = arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);

  console.log(result); // 15
  ```

  ```jsx
  let userList = [
    { name: 'Mike', age: 30 },
    { name: 'Jane', age: 10 },
    { name: 'Jerry', age: 20 },
  ];

  let result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
      prev.push(cur.name);
    }
    return prev;
  }, []);
  ```

<br><br><br>

출처 : 코딩앙마
