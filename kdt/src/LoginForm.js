import React , {Component} from "react";
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {id:'', pw:'', isLogin: true};
    }

    //이벤트처리핸들러
    inputForm = (e)=>{}
    
    render(){
    //이벤트처리핸들러
    let inputForm = (e)=>{ this.setState({[e.target.name] : e.target.value})}

    let loginForm = (e)=>{ 
        alert(this.state.id + " 회원님 " + this.state.pw + " 암호를 입력했습니다");
        this.setState({isLogin:true});
    }
    let logoutForm =(e)=>{this.setState({isLogin:false});}
/*         return (
        <div>
         아이디입력<input type='text' name='id' value={this.state.id} onChange={inputForm} /><br />
        암호입력 <input type='password' name='pw' onChange = {inputForm}/><br/>
        <input type='button' name='loginbtn' value='로그인' onClick={loginForm} /> 

        </div>); */
        //조건부 렌더링
        return(
        <div>
           {/* 로그인상태출력- {this.state.isLogin?"true":'false'} */}
        {this.state.isLogin 
        ?
        (<div>
        {this.state.id } 회원님 환영합니다.<input type='button' name='logoutbtn' value='로그아웃' onClick={logoutForm} />
        </div>)
         :
        (<div> 아이디입력<input type='text' name='id' value={this.state.id} onChange={inputForm} /><br />
        암호입력 <input type='password' name='pw' onChange = {inputForm}/><br/>
        <input type='button' name='loginbtn' value='로그인' onClick={loginForm} /> </div>)
        }
        </div>);
    }
}

export default LoginForm;

