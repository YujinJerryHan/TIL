//리액트객체

import React from "react";

//방법1 리액트 함수 선언 실행 결과 리턴(jsx)->리액트객체 변환 출력
function Hello(){
    const s = 10;
    return <div><h1>Hello 리액트</h1></div>;
}
//방법2 무명의함수
const Hello2 = function(){
    return (<div>{/*<div> 테스트</div>*/}
    <h1>Hello2 리액트</h1></div>);
}
//방법3 화살표함수
const Hello3 = ()=> <div><h1>화살표함수 리액트</h1></div> 

//방법4 클래스선언식=React.Component 내장 클래스상속
class Hello4 extends React.Component{
    render(){
        return  <div><h1>클래스선언식 리액트</h1></div>;
    }
} 

const Hello5 = <div><h1>jsx 표현한 리액트</h1></div>;
export default Hello;
export {Hello2, Hello3, Hello4, Hello5};

