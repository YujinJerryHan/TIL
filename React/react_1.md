## 리액트 왜 쓸까?

장점1) single page application 만들 때 쓴다

새고 없이도 부드럽게 동작

모바일 앱과 사용성 유사한 html 페이지 만들고 싶을 때

쌩 자바로도 만들 수 있는데 코드넘 길어져서 리액트 라이브러리를 쓰는 것임

리액트와 비슷한 라이브러리들 (Vue, Svelte, Preact, SolidJS)

장점2) 리액트 쓰면 html 재사용 편리

장점3) 같은 문법으로 앱개발 가능 (React Native)
<br>

## React 설치와 개발환경 셋팅

html 파일에 직접 리액트 설치해도 되지만 너무 오래걸림

create react app 으로 프젝 설치하는게 일반적이다

이걸 쓰려면 npm이라는 게 필요하다.

npm? 라이브러리 모아놓은 플랫폼 같은 거임

이건 nodejs 설치하면 딸려온다

npx어쩌구는 프로젝트 생성해주는 명령어

node_modules : 프젝 구동에 필요한 모든 라이브러리 코드 보관함

public : html, 이미지 파일 같은거 잠깐 보관하고 싶을때? static 파일 모아놓는 곳

src : 코드 짜는 곳

App.js 메인 페이지

js에 파일에 html 짜도 되네?

그 이유는

app.js 에서 짠 코드를 index.html에 집어넣어주세요 라는 함수 있어서 그럼

package.json : 프젝 정보 기입해논 파일

### 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개

js 파일 안에서 html 쓰네?

실은 JSX라는 언어임

.js 파일에서 쓰는 html 대용품

리액트에서 div만드는 법

React.createElement(’div’, null, ‘Hello World’)

JSX 사용하면

<div></div>

JSX 문법 1.

class 넣을 땐 className

(참고)

css 파일 쓰려면 상단에서

import ‘css 파일 경로’

JSX 문법2.

변수넣을 땐 {중괄호}

JSX 문법3.

style 넣을 때 style={}

먼가 코드를 잘못 짰을 때

에러 메시지는 터미널/브라우저에서 확인 할 수 있음

return() 안에는

병렬로 태그 2개 이상 기입 금지

<div></div><div></div>

자료 잠깐 저장할 땐 변수(var, let, const)

근데 state 써도 됩니다

1. import{ useState }
2. useState(보관할 자료)
3. let[작명a, 작명b] // [’남자 코트 추천’, 함수]
- a 는 {a} 로 써서 변수 처럼 쓸 수 있고
- b 는 state 변경 도와주는 함수

(참고) Destructuring 문법

```jsx
let num = [1, 2];
let [a, c] = [1, 2];

// let a = num[0];
// let c = num[1];
```

Q. 변수 문법 있는데 왜 state 써야함?

- 일반 변수는 갑자기 변경되면 html에 자동으로 반영 안됨
- state쓰던 html은 자동 재렌더링됨

Q. state 언제 써야함?

- 변동시 자동으로 html에 반영되게 만들고 싶으면 state 쓰셈
- 블로그 제목은 당연히 안 써도 되겠지.. 매일 업뎃되는 사항이 아님

### 버튼에 기능개발을 해보자 & 리액트 state변경하는 법

onClick={} 안에는 함수이름을 넣어야 함

```jsx
<span onClick={ () => {따봉변경(따봉+1);} }>👍</span>
```

(참고)

array/object 다룰 때 원본은 보존하는 게 좋음

```jsx
<button onClick={() => {
            let copy = [...글제목];
            copy[0] = '배불러디짐';
            글제목변경(copy);
          }}
        >
          나는버튼👁
        </button>
```

**state변경함수 특징**

기존state == 신규state의 경우 변경 안 해줌!

빡대가리식 정리)

state가 array/object면

독립적 카피본을 만들어서 수정해야 함

### Component : 많은 div들을 한 단어로 줄이고 싶으면

html 넘 더러움… 만들다 보면 길어질텐데

깔끔하게 해주는 ‘컴포넌트’ 있음

<Modal>

- 첨보는 사람도 이해 쉬울 듯
- 미래의 나도 이해 쉬울 듯

컴포넌트 만드는 법

1. function 생성 
(주의! 다른 function 바깥에 써야 하며, 영어대문자로 작명하기)
2. return() 안에 html 담기
- 하나의 태그로 시작하여 하나의 태그로 끝나야 함
- 두개의 <div> 병렬로 넣는다던가.. 그런 거 안됨
3. <함수명></함수명> 쓰기

- 근데 ! 나는 병렬적으로 태그 두개 이어진 걸 함수로 만들어야 한다. 하면 새로운 <div>로 묶어줘도 됨. 하지만 맨 바깥에 있는 <div>태그는 의미가 없음. 
그럴 때 <></> 를 사용가능 (fragment 문법)

```jsx
function Modal() {
  return(
		<>
    <div className='modal'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
      </div>
			<div>병렬로 넣고 시퍼</div>
		</>
  )
}
```

**어떤 걸 컴포넌트로 만들면 좋은가?**

1. 반복적인 것들
2. 큰 페이지들
3. 자주 변경되는 것들
4. 다른 팀원과 협업할 때 웹페이지를 컴포넌트 단위로 나눠서 작업을 분배하기도 한다

컴포넌트의 단점 :

state 가져다 쓸 때 문제 생김

(A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음. 당연함..;)

참고) 컴포넌트 만드는 문법2

```jsx
const com = () => {
	return (
	<div></div>
)
}
```

- const로 쓰면 에러메시지 뜨는 이점이 있음

App.js 파일에서 쓰고 있는

function App() { } 이것도 사실 컴포넌트이다.

암데나 <App/> 쓰면 안에 있는 거 두개 되겠지

### 리액트 환경에서 동적인 UI 만드는 법 (모달창 만들기)

동적인 UI 만드는 step

1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성 (조건문 등으로)

```jsx
let [modal, setModal] = useState();
```

state 작명시 왼쪽 state이름은 아무렇게나 해도 되는데

오른쪽 함수는 set이름 으로 하는게 일반적이다

**state에 무슨 자료를 넣어야 하지?**

암거나 맘대로 하면 된다

‘닫힘’ / ‘열림’

0/1

true/false

**JSX에서 조건문 쓰는 법 : 삼항연산자(ternary operator)**

조건문은 if문 쓰면 되는데

JSX안에서는 if문을 바로 사용할 수 없다.

대신 삼항연산자를 JSX 중괄호 안에 쓰면 된다

```jsx
조건식 ? 참일 때 : 거짓일 때
```

**제목 클릭시 모달창 띄우기?**

→ 클릭시 state만 조절하면 된다

### map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

반복문으로 같은 html 반복생성하는 법

map() 함수가 몬데?

1. array 자료 갯수만큼 함수 안의 코드 반복 실행해줌
2. return 오른쪽에 있는 걸 array로 담아줌
3. 유용한 파라미터 2개(array자료, 1씩증가정수)

중괄호 안에서는 for반복문 못쓰니까

map을 쓰면 된다

파라미터 2개까지 가능

첫번째는 array 자료 순서대로 반환

두번째는 반복문 돌 때마다 0부터 1씩 증가하는 정수

```jsx
{
        글제목.map(function(a, i){
          return (
          <div className='list'>
          <h4>{글제목[i]}</h4>
          <p>4월 23일 발행</p>
        </div>)
        })
      }
```

*{글제목[i]} 대신 {a}도 가넝.

결론 : 비슷한 html 반복생성하려면 map() 쓰면 됩니다