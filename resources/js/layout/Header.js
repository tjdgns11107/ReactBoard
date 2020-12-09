import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import { AppContext } from '../components/App';

const Header = ({location, history}) => {
    const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useContext(AppContext);

    const logout = () => {
        console.log("login", isLoggedIn, "name", userName);

        Axios
            .post('/logout')
            .then(result => {
                alert('로그아웃 되었습니다.');
                console.log('logout result', result);
                setIsLoggedIn('logout');
                setUserName(false);
            })
            .catch(err => {
                console.log('logout err', err);
            })
    }

    const navBar = {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    
    const nav = {
        margin: 10,
        width: '60%',
    }
    
    const navBtn = {
        display: 'inlineBlock',
        fontSize: 20,
        padding: 10,
        color: 'white',
        textDecoration: 'none',
    }
    
    const navStart = {
        display: 'inline',
        float: 'left',
        padding: 10,
    }
    
    const navEnd = {
        display: 'inline',
        float: 'right',
        padding: 10,
    }

    return(
        <div className="navBar" style={navBar}>
            <nav style={nav}>
                <div className="navStart" style={navStart}>
                    <Link to="/" className="navBtn" style={navBtn}>Main</Link>
                </div>
                { isLoggedIn == "login" ? (
                    <div className="navEnd" style={navEnd}>
                        <Link to="/" className="navBtn" style={navBtn} id="name">{userName}님</Link>
                        <Link to="/" className="navBtn" style={navBtn} id="logout" onClick={logout}>Logout</Link>
                    </div>
                ) : (
                    <div className="navEnd" style={navEnd}>
                        <Link to="/login" className="navBtn" style={navBtn} id="login">Login</Link>
                        <Link to="/regist" className="navBtn" style={navBtn} id="regist">Regist</Link>
                    </div>
                ) }
            </nav>
        </div>
    );
};

export default Header;