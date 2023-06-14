## Window.localStorage

localStorage를 사용하면 key-value 값을 Storage에 저장할 수 있다. 

- setItem() : key, value 추가
- getItem() : value 읽어오기
- removeItem() : item 삭제
- clear() : 도메인 내의 localStorage 값 삭제
- length : 전체 item 갯수
- key() : index로 key값 찾기

localStorage.setItem(key, value);
- localStorage에는 문자열만 저장할 수 있다.
- 정수를 저장해도 문자열로 저장되며, 객체나 배열을 저장하기 위해서는 객체를 문자열로 변환해서 저장해야 한다.

getItem
removeItemg