//댓글 작성자이름 사진 댓글내용 3개로 구성 
function Comment (props){
    return (
    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    style={{width:50 , height:50, borderradius:25}} 
    />
    <span>{props.id}</span>
    <span>{props.comment}</span>
    </div>
    );
}

export default Comment;
