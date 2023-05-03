
import { useState } from "react";

function LoginForm2(){

/*const [id, setId] = useState('');
const [pw, setPw] = useState('');    
const [isLogin, setLoin] = useState(false);   */
const [form, setForm] = useState({
    id : '', 
    pw : '',
    isLogin : false
});

    //이벤트처리핸들러
    let inputForm = (e)=>{ 
       setForm( {...form,  //기존 form객체 복사
        [e.target.name] : e.target.value }); // 원하는 변수의 덮어씌운다 객체 리턴
    }   

    let loginForm = (e)=>{ 
        alert(form.id + " 회원님 " + form.pw + " 암호를 입력했습니다");
        setForm({...form,  //기존 form객체 복사
        isLogin : true });
    }
    let logoutForm =(e)=>{ 
          setForm({...form,  //기존 form객체 복사
           isLogin : false });}

    let enterForm=(e)=>{
        if(e.key === 'Enter'){
            loginForm();
        }
    }

        //조건부 렌더링- 인라인 if-else
        return(
        <div>
           {form.isLogin && form.id}   
         {form.isLogin 
        ?
        (<div>
        {form.id } 회원님 환영합니다.<input type='button' name='logoutbtn' value='로그아웃' onClick={logoutForm} />
        </div>)
         :
        (<div> 아이디입력<input type='text' name='id' value={form.id} onChange={inputForm} /><br />
        암호입력 <input type='password' name='pw' onChange = {inputForm} onKeyDown={enterForm}/><br/>
        <input type='button' name='loginbtn' value='로그인' onClick={loginForm} /> </div>)
        }
        </div>);


    }//function end
export default LoginForm2;

