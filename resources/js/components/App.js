import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import RegistForm from '../router/RegistForm';
import LoginForm from '../router/LoginForm';
import Body from '../layout/Body';

function App() {
    return (
        <AppContext.Provider value={} >
            <Router>
                <Header />
                <Route path="/" exact component={Body} />
                <Route path="/regist" exact component={RegistForm} />
                <Route path="/login" exact component={LoginForm} />
                <Footer />
            </Router>
        </AppContext.Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
