import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

function Header({ backButton }) {
    const history = useNavigate();
    return (
        // BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history(-1)(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='header__icon'></ArrowBackIosIcon>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
            
            <Link to='/'>
                <img className="header__logo" src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png' alt="tinder logo"></img>
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header__icon"/>
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header