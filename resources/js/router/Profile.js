import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

import { AppContext } from '../components/App';

const Profile = ({location, history}) => {
    const { setIsLoggedIn, setUserName } = useContext(AppContext);

    const [editEmail, setEditEmail] = useState("");
    const [editName, setEditName] = useState("");
    const [editpw, setEditPw] = useState("");
    const [EditpwCf, setEditPwCf] = useState("");
    
    const FormDiv = {
        margin: "auto",
        width: "60%",
        textAlign: "center",
    }
    
    const inputDiv = {
        margin: 20,
        padding: 10,
    }

    const editUserForm = {
        margin: 80,
    }

    const inputForm = {
        width: 600,
        height: 70,
        margin: 20,
        padding: 10,
        fontSize: 20,
    }

    const editUserBtn = {
        width: 600,
        height: 70,
        fontSize: 22,
        margin: 20,
        backgroundColor: 'black',
        color: 'white',
    }

    return (
        <div className="FormDiv" style={FormDiv}>
            <form className="editUserForm" style={editUserForm} onSubmit={regist}>
                <input type="hidden" name="_csrf" value="${CSRF_TOKEN}" />
                <div className="inputDiv" style={inputDiv}>
                    <input
                        style={inputForm}
                        type="email"
                        name="email"
                        maxLength="100"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email" />
                </div>
                <div className="inputDiv" style={inputDiv}>
                    <input
                        style={inputForm}
                        type="name"
                        name="name"
                        maxLength="20"
                        onChange={e => setName(e.target.value)}
                        placeholder="Name" />
                </div>
                <div className="inputDiv" style={inputDiv}>
                    <input
                        style={inputForm}
                        type="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password" />
                </div>
                <div className="inputDiv" style={inputDiv}>
                    <input
                        style={inputForm}
                        type="password"
                        name="pwConfirm"
                        maxLength="100"
                        onChange={e => setPwConfirm(e.target.value)}
                        placeholder="Password Confirm" />
                </div>
                <div className="inputDiv" style={inputDiv}>
                    <button
                        style={editUserBtn}
                        type="submit">
                        정보 수정 가입
                    </button>
                </div>
            </form>
        </div>
    );  
}
 export default Profile;