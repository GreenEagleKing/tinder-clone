import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return <div className='chats'>
        <Chat 
            name='Mark'
            message='Yo whats up'
            timestamp='40 seconds ago'
            profilePic='https://people.com/thmb/Aca8Y-czkrP584zLHZzV14NZZck=/735x0/Mark-Wahlberg-1-60c1bec3bc3b4188aed7cb87cf8e3b9d.jpg'
        />
         <Chat 
            name='Paul'
            message='Yo whats up'
            timestamp='30 seconds ago'
            profilePic='https://m.media-amazon.com/images/M/MV5BMTY4NTEwNDg1MV5BMl5BanBnXkFtZTgwODMwMDA0ODE@._V1_.jpg'
        />
         <Chat 
            name='Sid'
            message='Yo whats up'
            timestamp='20 seconds ago'
            profilePic='https://flxt.tmsimg.com/assets/502903_v9_bc.jpg'
        />
         <Chat 
            name='Joe'
            message='Yo whats up'
            timestamp='10 seconds ago'
            profilePic='https://flxt.tmsimg.com/assets/884936_v9_bb.jpg'
        />
    </div>
}

export default Chats;