import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const LoginForm = ({location, history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();

        console.log(email, password);
        
        if (email === "" || email === undefined) {
            alert("이메일 주소를 입력해 주세요.");
            return;
        } else if (password === "" || password === undefined) {
            alert("비밀번호를 입력해 주세요.");
            return;
        } else if (password < 7 || password > 17) {
            alert("비밀번호를 8~16자리로 입력해 주세요.");
            return;
        }

        const loginData = {

        }

        console.log("regist data", loginData);

        Axios
            .post('/login', loginData)
            .then(result => {
                console.log("rs", result, 'rsdt',result.data);
            })
            .catch(err => {
                console.log("regist err", err);
            })
    }

    const FormDiv = {
        margin: "auto",
        width: "60%",
        textAlign: "center",
    }
    
    const inputDiv = {
        margin: 20,
        padding: 10,
    }

    const loginForm = {
        margin: 80,
    }

    const inputForm = {
        width: 600,
        height: 70,
        margin: 20,
        padding: 10,
        fontSize: 20,
    }
    const loginBtn = {
        width: 600,
        height: 70,
        fontSize: 22,
        margin: 20,
        backgroundColor: 'black',
        color: 'white',
    }

    return (
        <div className="FormDiv" style={FormDiv}>
            <form className="loginForm" style={loginForm} onSubmit={login}>
                <input type="hidden" name="_csrf" value="${CSRF_TOKEN}" />
                <div className="inputDiv" style={inputDiv}>
                    <input
                        style={inputForm}
                        type="email"
                        name="email"
                        maxLength="20"
                        onChange={e => setName(e.target.value)}
                        placeholder="Email" />
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
                    <button
                        style={loginBtn}
                        type="submit">
                        로그인
                    </button>
                </div>
                <div>
                    <span>
                        아직 회원 가입을 하지 않으셨다면?
                    </span>
                    <Link to="/regist">
                        회원가입
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;