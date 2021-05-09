import React, {useState, useEffect} from 'react';
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsetEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from './StateProvider';

const Chat = (props) => {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot)=> (
                setRoomName(snapshot.data().name))


            )
            db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map(doc=>doc.data())))

        }
    }, [roomId])

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));

    }, [roomId]);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(input);
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
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
            <h3>{roomName}</h3>
            <p>last seen {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
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
            {messages.map((message) => (
                <p key={message.timestamp} className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                <span className="chat__name">{message.name}</span>
                {message.message}
                <span className="chat__timeStamp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
                </span>
                </p>
        

            ))}

        

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