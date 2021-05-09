import React, {useState, useEffect} from 'react';
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsetEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


const Chat = (props) => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));

    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(input);
        setInput('');

    }
    const inputChangeHandler = (event) => {
        setInput(event.target.value);

    }

    return(
        <div className="chat">

        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>last seen at..</p>
            </div>

            <div className="chat_headerRight">
            <IconButton>
            <SearchOutlined/>
            </IconButton>

            <IconButton>
            <AttachFile />
            </IconButton>

            <IconButton>
            <MoreVertIcon/>
            </IconButton>
            </div>

        </div>

        <div className="chat__body">
        <p className={`chat__message ${true && 'chat__receiver'}`}>
        <span className="chat__name">mounika</span>
        hey hello
        <span className="chat__timeStamp">3:54pm</span>
        </p>
        </div>

        <div className="chat__footer">
        <InsetEmoticonIcon/>
        <form>
            <input type="text" value={input} onChange={inputChangeHandler} placeholder="Type a message"/>
            <button onClick={sendMessage} type="submit">send message</button>
        </form>
        <MicIcon/>
        </div>

        </div>
    );
}

export default Chat;