## JavaScript modules

개발하는 애플리케이션의 크기가 커지면 파일을 여러 개로 분리해야 하는 시점이 온다. 이때 각각의 분리된 파일을 '모듈(module)'이라고 부르며, 모듈은 대개 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성된다.
<br><br>

## 모듈?

모듈은 하나의 파일이다. 스크립트 하나는 모듈 하나이다.
모듈에 특수한 지시자 `export` `import`를 적용하면 다른 모듈을 불러와 그 모듈에 있는 함수를 호출하는 것과 같은 기능 공유가 가능하다.

- `export` 지시자를 사용해 파일 `counter.js` 내부의 함수 `increase`를 외부로 내보내기

```jsx
// counter.js
let count = 0;

export function increase() {
  count++;
  console.log(count);
}
```

- `import` 지시자를 사용해 `main.js`에서 함수 `increase` 사용하기

```jsx
// main.js
import increase from './counter.js';

increase(); // 1
increase(); // 2
```

- 여러가지 함수 가져오기 `{}` 사용

```jsx
// main.js
import { increase, getCount } from './counter.js';
```

<br><br><br>

참고 : 코어자바스크립트
