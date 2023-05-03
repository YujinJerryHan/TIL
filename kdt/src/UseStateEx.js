/*
import React, {Component} from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        this.id="프로퍼티변수 id";
        this.state = {id : "this.state객체의 id"}
    }

    render(){
        let change=()=>{
            this.id= this.id + " 변경";
            console.log(this.id);
            this.setState({id : this.state.id + " 변경"});
        }
        return(<div>
            <h3>this.props.id= {this.props.id} 는 불변입니다</h3>
            <h3 onClick={change}> this.id= {this.id}  </h3>
            <h3 > this.state.id= {this.state.id}  </h3>
        </div>);
    }
}

export default User;

*/

import { useState } from "react";


function User2 (props){
    let id="지역변수 id";//state의 변수명과 중복시 오류
    const [stateid, setStateId] = useState("STATE ID");
    const [age, setAge] = useState(0);
    
/*this.state = {stateid : "state객체의 id"  , age: 20, price : 10000 }; */
    let change=()=>{
            id= id + " 변경";
            console.log(id);
            setStateId(id + " 값으로 변경");
    }
        return(<div>
            <h3>props.id= {props.id} 는 불변입니다</h3>
            <h3 onClick={change}> id= {id}  </h3>
            <h3 > stateid= {stateid}  </h3>
        </div>);
    }

export default User2;
