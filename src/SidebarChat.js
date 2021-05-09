import React, {useState, useEffect} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';

const SidebarChat = (props) => {
    const [seed, setSeed] = useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));

    }, []);
    

    const createChat = () => {
        const roomName = prompt("please enter  name for chat");
        if(roomName) {
            //do some clever database stuff...
            db.collection('rooms').add({
                name: roomName
            });
        }

    }

    return(
        !props.addNewChat ? 
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
            <h2>{props.name}</h2>
            <p>Last Name..</p>
            </div>

        </div>
        : 
        <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;
















// waht is the scope of 
// how to apply


















