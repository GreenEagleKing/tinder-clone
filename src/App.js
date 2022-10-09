import React from 'react'
import Header from './Header'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
     <Router>
      <Routes>
        <Route path='/chat'>
    
        </Route>
        <Route path='/' element={<><TinderCards/><SwipeButtons/></>} />
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