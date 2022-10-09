import React from 'react';
import Avatar from '@mui/material/Avatar';

function Chat({ name, message, profilePic, timestamp}) {
    return <div className='chat'>
        <Avatar className='chat__image' alt={name} src={profilePic}></Avatar>
    </div>
}

export default Chat;