// 글발행 버튼
// 삭제 버튼

import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '바푸맛집', '녹용이']);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4 style={{ color: 'red' }}>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className='list'>
            <h4>{글제목[i]}</h4>
            <p>2월 18일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제할래요
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value); // 입력값 state에 가져온 값 넣음
        }}
      />
      <button
        onClick={(e) => {
          let copy = [...글제목]; // 글제목 state 복제
          copy.unshift(입력값); // copy에 입력값 맨 앞에 추가
          글제목변경(copy); // 글제목변경하는 함수 실행하면 새로 추가한 값까지 실행 완
        }}
      >
        글추가
      </button>
    </div>
  );
}
