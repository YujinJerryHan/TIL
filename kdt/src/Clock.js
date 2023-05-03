
function Clock(p){
    let value = 0;
    function addValue(){
       ++value;
       console.log(value);
    }
    //이벤트처리 - useState객체-수정 발생 rerendering
    return (<div>
        <h1 onClick= {addValue } >안녕 리액트 {value}</h1>
        <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
    </div>);
}

/*function Clock(){
    return (<div>
        <h1 >안녕 리액트 </h1>
        <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
    </div>);
}*/

export default Clock;