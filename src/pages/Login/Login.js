import React,{useState} from 'react';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

const Login = () =>{

    const[user,setUser]= useState('');
    const[password, setPassword]= useState('');
    const[passwordError, setPasswordError]=useState(false);

    function handleChange(name,value){
        if(name === 'usuario'){
            setUser(value)
        }else{
            if(value.length<6){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value)
            }
            
        }
    }

    function handleSubmit(){
        let account ={user,password}
        if(account){
            console.log('account',account)
        }
    }
   
    return(
        <div className='login-container'>
        <Title text='Rick and Morty '/>
        <div className='login-container2'>
        <Label text='Usuario'/>
        <Input
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder:'Ingrese su usuario'
        }}
        handleChange={handleChange}
        />
        <Label text='Contraseña'/>
        <Input
        attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder:'Ingrese su contraseña'
        }}
        handleChange={handleChange}
        param={passwordError}
        />
        { passwordError &&
        <label className='label-error'>
            Contraseña Invalida o incompleta
        </label>
        }
        <div>
        <button onClick={handleSubmit} className='btn btn-primary'>
            Ingresar
        </button>
        </div>
        </div>
        
      
        </div>
    )
};

export default Login;