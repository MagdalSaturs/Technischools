import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
    const loginRef = React.createRef();
    const passwordRef = React.createRef();
    const navigate = useNavigate();

    const name = 'MagdaTechnischools'
    const password = 'Technischools'


    const login = () => {
        const login = loginRef.current.value
        const password1 = passwordRef.current.value

        if (login === name && password1 === password) {
            navigate('/ListOfSubjects')
        }
    };

    return (
        <>
            <div className='login'>
                <h1>Login</h1>
                <input ref={loginRef} type='text' placeholder='login'></input>
                <input ref={passwordRef} type='password' placeholder='password'></input>
                <button onClick={login}>Zaloguj</button>
            </div>
        </>
    )
};

export default Login;