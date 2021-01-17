import React, {useContext, Fragment} from 'react';
import SendBar from './SendBar';
import classes from './Chat.module.css';
import FriendContext from '../../../friendContext/friendContext';

const Chat = (props) => {
    const friendContext = useContext(FriendContext);
    const {friendEmail} = friendContext;

    if (!friendEmail) return (
     <h2 className={classes.ChatMessage}>Select a Friend to Message!</h2>
    )
    
    return(
        <div className={classes.Chat}>
            <SendBar friendEmail={friendEmail}/>
        </div>
    );
};

export default Chat;