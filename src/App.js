import React from 'react'
import Header from './Header'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className='App'>
      
     <Router>
      <Routes>
        <Route path='/chat' element={<><Header backButton='/'/><Chats/></>}>
        </Route>
        <Route path='/chat/:person' element={<><Header backButton='/chat'/><ChatScreen/></>}>
        </Route>
        <Route path='/' element={<><Header/><TinderCards/><SwipeButtons/></>} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;


  
{/* Tinder Cards */}
{/* Buttons below tinder cards*/}

{/* Chats Screen */}
{/* Individual chat screen */}