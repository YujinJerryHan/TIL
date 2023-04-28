# 자식이 부모의 state 가져다쓰고 싶을 때는 props
### 모달창 안에 첫 째 글제목을 넣어보자

- function Modal() 안에는 function App() 안에서 만든 변수를 넣을 수 없다 (undefined)
- 나는 가져다 쓰고 싶음 → props 문법 쓰면 해결 가능
- 부모 컴포넌트(App), 자식 컴포넌트(Modal)에게 state를 전송해줄 수 있다 → 자식이 부모가 가지고 있던 state 사용 가능

### 부모 → 자식 state 전송하는 법

1. <자식컴포넌트 작명={state이름}>
2. 파라미터(보통 props로 씀) 등록 후 props.작명 사용

```jsx
<Modal 글제목={변수명}> // 일반 변수, 함수 전송 ok
<Modal 글제목="어쩌구"> // 문자는 중괄호 없이 ok
```

props는 함수 파라미터 문법과 똑같다

<br><br>

# input : 사용자가 입력한 글 다루기

input type=’’

- text
- range
- checkbox
- date

(참고) select, textarea(좀 더 큰 텍스트 박스) 등이 있음

`<input>`에 입력시 코드를 실행하고 싶을 때 

- `onChange` / `onInput` 핸들러 사용
- `onMouseOver` : 마우스 갖다 댔을 때
- `onScroll` : 스크롤 할 때
- 이벤트 핸들러 매우 많음. 30여 개.. 필요할 때 검색!

`<input>`에 입력한 값 가져오는 법

1. 파라미터 작명 (보통 e 쓴다)
2. e 에는 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있다

e.target.value 로 가져온 값은 보통 변수나 state에 저장한다

그런데 state 변경함수는 늦게 처리된다 (전문용어로 비동기처리) → state변경해주기 전에 다음 줄(console.log)을 먼저 실행하기 때문

<JS 문법>

Q. 왜 <span> 눌러도 모달창 뜸?

: 클릭이벤트는 상위html로 퍼짐 (이벤트 버블링)

상위 html로 퍼지는 이벤트 버블링 막고 싶으면

e.stopPropagation() : 이벤트 버블링을 막아주세요

