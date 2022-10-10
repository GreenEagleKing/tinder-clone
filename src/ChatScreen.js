import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Obama',
            image: 'https://www.biography.com/.image/t_share/MTczNjEwODI2NTg5MDg3MTI0/michelle-obama-gettyimages-85246899.jpg',
            message: 'What"s Up'
        },
        {
            name: 'Obama',
            image: 'https://www.biography.com/.image/t_share/MTczNjEwODI2NTg5MDg3MTI0/michelle-obama-gettyimages-85246899.jpg',
            message: 'Stop messagin me'
        },
        {
            message: 'I dont like you'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input}])
        setInput('')
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You matched with Obama</p>
            {messages.map((message) => (
                message.name ? (
                <div className='chatScreen__message'>
                    <Avatar className='chat__message' alt={message.name} src={message.image}></Avatar>
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
            ) : (
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
            )
            )
        )}
            <form className='chatScreen__input'>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='chatScreen__inputField' 
                placeholder='Type a Message...'
                type='text'></input>
                <button onClick={handleSend} className='chatScreen__button'>SEND</button>
            </form>

        </div>
        
    )
}

export default ChatScreen