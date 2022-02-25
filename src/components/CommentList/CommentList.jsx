import Comment from "../Comment/Comment";
import classes from "./CommentList.module.css";

const CommentList = () => {
    const comments = [
        {nickname: 'Jeremaya_1g', avatar: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque debitis illum ratione officiis deleniti natus numquam sapiente ducimus. Reiciendis adipisci, non nemo excepturi itaque explicabo '},
        {nickname: 'Soprano Tom', avatar: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque debitis illum ratione officiis deleniti natus numquam sapiente ducimus. Reiciendis adipisci, non nemo excepturi itaque explicabo quos reprehenderit voluptates quia quas expedita veniam neque, voluptatibus officia nesciunt a impedit eveniet soluta numquam dolores nihil! Facere itaque quo at natus omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur odit exercitationem laborum. Non mollitia totam cumque eaque pariatur esse.'},
        {nickname: 'иван-2', avatar: false, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur odit exercitationem laborum. Non mollitia totam cumque eaque pariatur esse.'},
        {nickname: 'james tony', avatar: false, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur odit exercitationem laborum. Non mollitia totam cumque eaque pariatur esse.'},
        {nickname: 'rb', avatar: false, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur odit exercitationem laborum. Non mollitia totam cumque eaque pariatur esse.'},
        {nickname: 'Goblin', avatar: false, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur odit exercitationem laborum. Non mollitia totam cumque eaque pariatur esse.'},
        {nickname: 'Steven', avatar: false, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur odit exercitationem laborum. Non mollitia totam cumque eaque pariatur esse.'},
    ];

    return ( 
        <div className={classes.commentList}>
            <h2>Comments</h2>
            <div>
                {comments.map(comment => 
                    <Comment 
                        key={comment.nickname}
                        nickname={comment.nickname}   
                        avatar={comment.avatar}   
                        text={comment.text}   
                    />
                )}
            </div>   
        </div>
     );
}
 
export default CommentList;