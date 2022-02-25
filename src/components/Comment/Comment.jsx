import classes from "./Comment.module.css";
import { defaultAvatar } from "..";

const Comment = ({nickname, avatar, text}) => {
    return ( 
        <div className={classes.comment}>
            <div className={classes.nickname}>{nickname}</div>
            <div className={classes.body}>
                <div className={classes.avatar}>
                    <img src={avatar || defaultAvatar} alt="avatar" />
                </div> 
                <div className={classes.text}>
                    {text}
                </div> 
            </div>  
        </div>
     );
}
 
export default Comment;