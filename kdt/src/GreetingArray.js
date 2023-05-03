function GreetingAll(){
    
    let insa0 = "오늘도 즐거운 하루되세요!";
    let insa1 = "안녕하세요 리액트";
    let insa2 = "오늘 날씨 어때요?";
    let insas = [insa0, insa1, insa2];
    //result_insas = [<h1>0 -오늘도 즐거운 하루되세요!</h1>, ....  ]
    //배열 map( 자바스크립트 메소드)
    //배열 함수 실행 결과 리턴 새로운 배열 생성
    const result_insas = insas.map(function(value, index){
            return <h1>{index} - {value}</h1> ;
     });
    return <div>{result_insas}</div>;

}

export default GreetingAll;