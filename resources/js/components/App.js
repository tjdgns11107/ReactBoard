import React, {useState, useEffect, createContext} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Axios from 'axios';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Body from '../layout/Body';

import RegistForm from '../router/RegistForm';
import LoginForm from '../router/LoginForm';
// import Profile from '../router/Profile';

export const AppContext = createContext();

function App() {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userName, setUserName ] = useState(false);

    useEffect( () => {
        Axios
        .post("/state")
        .then(result => {
            console.log("result state", result);
            if(result.data.name){
                console.log(result.data.name, '/', userName);
                setUserName(result.data.name);
                setIsLoggedIn("login");
                console.log('state 1');
                console.log('name', userName, 'logged', isLoggedIn);
            }
            else {
                setUserName(false);
                setIsLoggedIn("logout");
                console.log('state 2');
                console.log('name', userName, 'logged', isLoggedIn);
            }
        })
    }, [])

    return (
        isLoggedIn == 'login' ? (
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, userName, setUserName}}>
            <Router>
                <Header />
                <Route path="/" exact component={Body} />
                {/* <Route path="/profile" exact component={Profile} /> */}
                <Footer />
            </Router>
        </AppContext.Provider>
        ) : (
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, userName, setUserName}}>
            <Router>
                <Header />
                <Route path="/" exact component={Body} />
                <Route path="/regist" exact component={RegistForm} />
                <Route path="/login" exact component={LoginForm} />
                <Footer />
            </Router>
        </AppContext.Provider>
        )
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
