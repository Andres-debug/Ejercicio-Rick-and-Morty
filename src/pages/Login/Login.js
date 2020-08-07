import React, { useState } from 'react';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

const Login = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            if (value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }

        }
    }

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'Andres' && param.password === "1234567") {
                let ac = (param.user, param.password);
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
                setHasError(false);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account);
        }
    }

    if (hasError === true) {
        return (
            <label className='label-alert'>
                Su contraseña y/o usuario son incorrectos
            </label>
        )

    } else {

        return (
            <div className='login-container'>
                <Title text='Rick and Morty ' />

                <div className='login-container2'>
                    <Label text='Usuario' />
                    <Input
                        attribute={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                            placeholder: 'Ingrese su usuario'
                        }}
                        handleChange={handleChange}
                    />
                    <Label text='Contraseña' />
                    <Input
                        attribute={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                            placeholder: 'Ingrese su contraseña'
                        }}
                        handleChange={handleChange}
                        param={passwordError}
                    />
                    {passwordError &&
                        <label className='label-error'>
                            Contraseña Invalida o incompleta
        </label>
                    }
                    <div>
                        <Link to="/principal" onClick={handleSubmit} className="btn btn-dark">
                            Ingresar
                    </Link>
                    </div>
                </div>


            </div>
        )
    };
}

export default Login;