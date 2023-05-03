import React from "react";

/*function Book(p){//객체
    return (<div><h1> {p.name} 도서의 가격은 {p.price} 입니다</h1></div>);
}*/


/*const Book =function(p){
    return (<div><h1> {p.name} 도서의 가격은 {p.price} 입니다</h1></div>);
}*/

//const Book= (p)=><div><h1> {p.name} 도서의 가격은 {p.price} 입니다</h1></div>;

class Book extends React.Component{
    //React.Component - render 오버라이딩-화면 출력 기능 
    // this.props (부모객체에서 전달받은 값 저장) 상속 포함=객체
    render(){ return (<div><h1> {this.props.name} 도서의 가격은 {this.props.price} 입니다</h1></div>); }
}
export default Book;