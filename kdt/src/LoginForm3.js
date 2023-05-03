
import { useState } from "react";

function LoginForm3(){

const [form, setForm] = useState({
    id : '', 
    pw : '',
    gender : '남자'
});

    //이벤트처리핸들러
    let inputForm = (e)=>{ 
       setForm( {...form,  //기존 form객체 복사
        [e.target.name] : e.target.value }); // 원하는 변수의 덮어씌운다 객체 리턴
    }   

    let genderForm = (e)=>{
        setForm( {...form,  //기존 form객체 복사
        gender : e.target.value }); // 원하는 변수의 덮어씌운다 객체 리턴
    }
       let submitForm = (e)=>{
        alert(form.id + " 회원님 " + form.pw + " 암호를 입력했습니다" + "성별은 " + form.gender);
        //e.preventDefault();
    }
        //조건부 렌더링- 인라인 if-else
        return(
        <form action="http://localhost:8080/back/a.jsp" onSubmit={submitForm}>
        (<div> 아이디입력<input type='text' name='id' value={form.id} onChange={inputForm} /><br />
        암호입력 <input type='password' name='pw' onChange = {inputForm} /><br/>
        성별 <select name='gender' onChange={genderForm}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
        </select>
        <input type='submit' name='loginbtn' value='로그인'/> </div>)
        </form>
        );


    }//function end
export default LoginForm3;

