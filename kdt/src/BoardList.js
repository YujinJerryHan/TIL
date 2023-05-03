//import { Component } from "react";
//import React from "react";

import React, {Component} from "react";

class BoardHeading extends React.Component{
//번호 제목 작성자 조회수 제목행 4개컬럼 구성
render(){
    return (<thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th></tr></thead>);
}
}

class BoardRow extends React.Component{
    render(){
        const board_row = this.props.data.map(function(oneboard){
            return (<tr key={oneboard.seq} >
                <td>{oneboard.seq}</td><td>{oneboard.title}</td><td>{oneboard.writer}</td><td>{oneboard.view}</td>
                </tr>);
       });//map
        return (<tbody>{board_row}</tbody>);
    }
//
}
class BoardForm  extends React.Component{
    //props - data 배열 -state 에 포함 
    constructor(props){
        super(props);
        this.oneboard = 
        {seq:'6', title:'제목6', writer:"작성자6", view:"6"}
    }
    ///
    render(){
        board배열에 저장 구현 후에
        this.oneboard 변수 출력
        번호 : 
        제목 : 
        작성자 :
        조회수 : 
        게시물을 추가합니다.
    }
}

class BoardList extends React.Component{
    constructor(props){
        super(props);
        this.state={ board : [
            {seq:'1', title:'제목1', writer:"작성자1", view:"10"},
            {seq:'2', title:'제목2', writer:"작성자2", view:"11"},
            {seq:'3', title:'제목3', writer:"작성자3", view:"30"},
            {seq:'4', title:'제목4', writer:"작성자4", view:"55"},
            {seq:'5', title:'제목5', writer:"작성자5", view:"0"}
        ]  
      }
    }

    render(){
  
    return (<div>
        <table border="3">
            <BoardHeading />
            <BoardRow data={this.state.board} />
        </table>
        <BoardForm data={this.state.board} /> 
        </div>  )
    ;
}
}

export default BoardList;
