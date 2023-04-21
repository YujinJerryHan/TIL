## Boolean

---

null과 undefined는 다르다  
null은 변수 안에 아무것도 "없다"는 것을 확실히 나타내기 위해 쓴다.
num : 비어있어요.

undefined는 변수는 존재하지만 값이 아직 주어지지 않은 상태.
<br><br>

## Array

---

시작과 끝을 대괄호([])로 지정해준다.
각각의 항목은 콤마(,)로 구분해준다.

- nonsense array :

```
const nonsense = [1, 2, '3', '제리', '🐶', true, null, undefined,''];
```

## Object

---

property를 가진 데이터를 저장해주며, 중괄호({})를 사용한다.

### 음 .. 좀 별로 코드

- 개별적인 변수로 지정하면 한 그룹으로 인식하기 어렵다.
- Array로 지정하면 각각의 값이 어떤 속성을 갖는지 알 수 없다.

```
const playerName : "jerry";
const playerPoints : 10;
const playerFat : false;

const player = ["jerry", 100, true];
```

### 객체로 만들자!

```
const player = {
  name: "jerry",
  points: 10,
  fat: false,
}
console.log(player);
console.log(player.name);
console.log(player["name"]); // 위와 같은 결과 출력
player.lastName = "potato"; // property 추가 가능
```

- const는 수정할 수 없지만, object 안의 속성을 수정하는 것은 ok!

### Array vs Object

설명이 필요하지 않은 데이터 리스트들은 array,  
설명이 필요한 정보가 담긴 데이터 리스트들은 object로!
