const HeaderParts = (props) => 
    (<div style={ {backgroundColor:'red' , color:'white'}} >
        {props.title} 책의 가격은 {props.price} 입니다
        </div>);

const BodyParts = (p)=>{
     //p.totalPage++;
    return (<div style={ {border : '1px solid blue' , margin:'0 auto' , textAlign:'center'} }>
    <h3>총페이지수 : {p.totalPage} </h3> {p.body} 
    </div>)
}
const Book  = (pro)=>
    (<div>
        <HeaderParts title={pro.title} price={pro.price} /> 
        <BodyParts totalPage = {pro.totalPage} body={pro.body}  />
        <div className="react"></div>
     </div>);

export default Book;

/*class Book2 extends React.Component{
    render(){
        return ( this.props.price);
    };
}*/
/*
let s = {color: 'red' , 
        border : '2px solid blue',
        textAlign : 'center'
         };
<div style={s}></div>

<div style={{color: 'red' , 
        border : '2px solid blue',
        textAlign : 'center'
         }}></div>*/