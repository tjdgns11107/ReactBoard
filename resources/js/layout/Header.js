import React from 'react';
import {Link} from 'react-router-dom';

// import LoginForm from "./LoginForm";

const Header = () => {

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
                <div className="navEnd" style={navEnd}>
                    {/* <Route to="/Login" exact component={LoginForm} className="nav_btn" style={nav_btn} id="login">Login</Route> */}
                    <Link to="/login" className="navBtn" style={navBtn} id="login">Login</Link>
                    <Link to="/regist" className="navBtn" style={navBtn} id="regist">Regist</Link>
                </div>a
            </nav>
        </div>
    );
};

export default Header;