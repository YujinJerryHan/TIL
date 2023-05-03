import React, {Component} from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        this.id="프로퍼티변수 id";
        this.state = {stateid : "state객체의 id" };
    }

    render(){
        let change=()=>{
            this.id= this.id + " 변경";
            console.log(this.id);
            //setState는 비동기적 실행. 자동 render호출
            /*this.setState({stateid :  this.state.stateid  + " 변경"});
            console.log(this.state.stateid);//결과가 변경되지 않음
            */
           //동기적 실행으로 변경시 아래와 같이 setState(업데이트변수, 콜백함수) 형식
           //업데이트변수 진행후 바로 콜백 실행
           //함수형은 useEffect 사용
           this.setState({stateid :  this.state.stateid  + " 변경"}, 
                ()=>{ console.log(this.state.cnt) }
            );
            //this.state.stateid = "변경";//오류아님.  render안됨
        }
        return(<div>
            <h3>this.props.id= {this.props.id} 는 불변입니다</h3>
            <h3 onClick={change}> this.id= {this.id}  </h3>
            <h3> this.state.id= {this.state.stateid}  </h3>
        </div>);
    }
}

export default User;
