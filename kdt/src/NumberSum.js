import { useState, useMemo, useRef} from "react";

const NumberSum = ()=>{
   const [number, setNumber] = useState('');  //입력하는 숫자 저장  
   const [list, setList] = useState([]);//총합 저장 배열
    
   const inputElement = useRef(null); //참조할 객체 초기값 선언

    const onChange = (e)=>{
        console.log("onchange발생");
        setNumber(e.target.value);
        //e.target.focus();//input
    }
    const onClick = (e)=>{ 
        console.log("onclick발생");
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputElement.current.focus();//input 자동 focus
    }


    const getAverage = numbers =>{
        console.log("평균값 계산중");
       if(numbers.length  === 0) return 0;
       const sum  = numbers.reduce(function(a,b){ return a+b;});
       return sum / numbers.length;
    }
    const avg = useMemo(()=> getAverage(list) , [list]);
    //const avg = getAverage(list);//list 배열 지금까지 저장 내용 평균값 

    return(
        <div>
            <input value={number} onChange={onChange} ref={inputElement}/>
            <button onClick={onClick}>계산</button>
            <ul>
            {list.map(function(value, index){ 
                return (<li key= {index}>{value}</li>);
            })}
            </ul>
            <b>평균값 : {avg}</b>

        </div>
    )
}

export default NumberSum;
/*평균 출력 
숫자 입력/계산 클릭 호출
의도 - 숫자 입력시 호출x
       계산 클릭 호출o
       렌더링 특정 값 변경되면 그때만 호출
       number 변경 호출x
       list 변경 호출o 
*/