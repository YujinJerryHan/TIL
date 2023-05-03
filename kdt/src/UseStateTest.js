import { useEffect, useState } from "react";

function User2 (props) {
        let id="지역변수 id";
        const [stateid , setStateId ] = useState('초기 state id');
        const [age , setAge ] = useState(0);
        //age = useState(0)[0];
        //setAge = useState(0)[1];

        let change=()=>{
            id= id + " 변경";
            console.log(id);
            setStateId (stateid + " 변경 "); //자동 render호출."비동기적 수행"
        }

        //stateid   변경시만 작동 확인
        useEffect(()=>{
            console.log(stateid +" 값입니다");
           },[stateid]);

       /* useEffect(()=>{ //state 변화 반영 + render + 이후 추가 수행
            console.log("useeffect === " + id);
            console.log("useeffect === " + stateid);
           } );
       
           
           useEffect(()=>{ //컴포넌트 생성시 1번
            console.log("useeffect === " + id);
            console.log("useeffect === " + stateid);
           } , []);

           useEffect(()=>{ //age 변화시  실행
            console.log("useeffect === " + id);
            console.log("useeffect === " + stateid);
           } , [age]);
*/
         return(<div>
            <h3>props.id= {props.id} 는 불변입니다</h3>
            <h3 onClick={change}> id= {id}  </h3>
            <h3> useState:id= {stateid}  </h3>
        </div>);

}

export default User2;
