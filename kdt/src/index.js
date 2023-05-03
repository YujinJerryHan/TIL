import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock.js';
import Book from './Book_props';
import CommentList from './CommentList';
import User from './ThisStateTest';
import LifeCycleEx from './LifeCycle';
import User2 from './UseStateTest';
import BoardList from './BoardList';
import NumberSum from './NumberSum';
import SmartHome from './UseCallbackTest2';
import LoginForm from './LoginForm';
import LoginForm2 from './LoginForm2';
import LoginForm3 from './LoginForm3';
//import GreetingAll from './GreetingArray';
//import Hello, { Hello2, Hello3, Hello4  } from './start.js';
//import Hello5 from './Var';
//import Library from './Library';
//import Greeting from './Greeting';
//start.js파일 내부 Hello 함수 실행 리턴 결과 
const root = ReactDOM.createRoot(document.getElementById('root'));
//리액트 컴포넌트 - 리액트 엘리먼트를 리턴하는 함수/클래스  / 재사용 가능
//                export, import 대상 
//root.render(<NumberSum />);
root.render(
  <React.StrictMode>
   {/*  <App /> */}
   {/* <Hello />
    <Hello2 />
    <Hello3 />
<Hello4 />
<Hello5 />*/}
{/* <Library /> */}
{/* <Greeting /> */}
{/* <GreetingAll /> */}
{/* <Clock /> */}
{/* <Book title="책제목1" price="20000" totalPage="200" body="리액트 입문자용입니다" />
<Book title="책제목2" price="30000" totalPage="300" body="리액트 중급자용입니다"/> */}
{/* <CommentList /> */}
{/* <User id="부모에서 전달하는 id" /> */}
{/* <LifeCycleEx prop_value = "프롭스 전달" /> */}
{/* <User2 id="부모에서 전달하는 id" /> */} 
{/* <BoardList /> */}
{/* <NumberSum />  */}
{/* <SmartHome /> */}
{/* <LoginForm />
<hr />
<LoginForm2 />
<hr /> */}
<LoginForm3 />
  </React.StrictMode>
);

/*const timer = ReactDOM.createRoot(document.getElementById('timer'));
setInterval(function(){
  timer.render( <React.StrictMode> <Clock /> </React.StrictMode>);
  } , 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
