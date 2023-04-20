## HTML element를 JavaScript로 접근하기

- getElementById()
- getElementsByClassName()

```jsx
document.getElementById("어쩌구");
어쩌구.innerText = "Hey!";

console.log(title.id);
> Hey!
```

<br>

## querySelector, querySelectorAll : element를 가지고 오는 더 좋은 방법

- querySelector는 element를 CSS 방식으로 검색할 수 있다.
- class는 이름 앞에 `.`
- id는 `#`

```jsx
// class명이 hello인 요소들 중 h1의 첫번째 요소 지정
const title = document.querySelector('.hello h1:first-chile');
console.log(title);
```

<br>

## Events

- event의 종류는 click, moustenter, mouseleave 등… mdn 사이트 참고하기

```jsx
function handleTitleClick(){
	title.innerText = "title was clicked!");
	title.style.color = "aqua";
}

// title을 클릭했을 때 함수 실행
title.addEventListener("click", handleTitleClick);
// 방법2
title.onclick = "handleTitleClick";
```

