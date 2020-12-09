import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const RegistForm = ({location, history}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    // 1: 가입 가능 / 0: 중복 / -1: 미입력
    const [checkId, setCheckId] = useState(-1);

    const checkEmail = () =>{
        if(email ==="" || email === undefined) {
            alert("이메일 주소를 입력해 주세요.");
            setCheckId(-1);
            return;
        }
        
        const checkData = {
            email,
        }

        Axios
            .post('/check', checkData)
            .then(result => {
                console.log(result);
                const returnEmail = result.data;
                if(returnEmail === "" || returnEmail === undefined) {
                    alert(email + '는(은) 사용 가능한 이메일입니다');
                    console.log("result email", checkData);
                    console.log("check id", checkId);
                    setCheckId(1);
                    return;
                } else {
                    alert('중복된 이메일 입니다.');
                    console.log("entered email", returnEmail, "had email", returnEmail);
                    console.log("check id", checkId);
                    setCheckId(0);
                    return;
                }
            })
            .catch(err => {
                console.log("email check err", err);
                console.log("check id", checkId);
            })
    }

    const regist = (e) => {
        e.preventDefault();

        console.log(email, name, password, pwConfirm);
        
        if (email === "" || email === undefined) {
            alert("이메일 주소를 입력해 주세요.");
            setCheckId(-1);
            return;
        } else if (name === "" || name === undefined) {
            alert("이름을 입력해 주세요.");
            return;
        } else if (password === "" || password === undefined) {
            alert("비밀번호를 입력해 주세요.");
            return;
        } else if (password !== pwConfirm) {
            alert("비밀번호를 일치시켜 주세요.");
            return;
        } else if (password < 7 || password > 17) {
            alert("비밀번호를 8~16자리로 입력해 주세요.");
            return;
        }
        
        // 가입 가능
        if( checkId === 1 ) {
            const registData = {
                email,
                name,
                password,
            }

            console.log("regist data", registData);
    
            Axios
                .post('/regist', registData)
                .then(result => {
                    if(result.data.message === "used") {
                        alert("중복 된 이메일 입니다.");
                        setCheckId(0);
                        return;
                    }
                    console.log("rs", result, 'rsdt',result.data);
                })
                .catch(err => {
                    console.log("regist err", err);
                    // 메인 페이지로 이동
                })
        // 중복
        } else if( checkId === 0 ) {
            alert("중복 된 이메일 입니다.");
            return;
        // 미입력
        } else if ( checkId === -1 ) {
            alert("이메일 주소를 입력해 주세요.");
            return;
        }

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

    const registForm = {
        margin: 80,
    }

    const emailForm = {
        width: 460,
        height: 70,
        margin: 20,
        padding: 10,
        fontSize: 20,
    }

    const inputForm = {
        width: 600,
        height: 70,
        margin: 20,
        padding: 10,
        fontSize: 20,
    }

    const checkBtn = {
        width: 100,
        height: 70,
        fontSize: 16,
        margin: 20,
        backgroundColor: 'black',
        color: 'white',
    }

    const RegistBtn = {
        width: 600,
        height: 70,
        fontSize: 22,
        margin: 20,
        backgroundColor: 'black',
        color: 'white',
    }

    return (
        <div className="FormDiv" style={FormDiv}>
            <form className="registForm" style={registForm} onSubmit={regist}>
                <input type="hidden" name="_csrf" value="${CSRF_TOKEN}" />
                <div className="inputDiv" style={inputDiv}>
                    <input
                        style={emailForm}
                        type="email"
                        name="email"
                        maxLength="100"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email" />
                    <button
                        type="button"
                        style={checkBtn}
                        onClick={checkEmail}>
                        중복 확인
                    </button>
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
                        style={RegistBtn}
                        type="submit">
                        회원 가입
                    </button>
                </div>
                <div>
                    <span>
                        이미 회원 가입을 하셨다면?
                    </span>
                    <Link to="/login">
                        로그인
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default RegistForm;