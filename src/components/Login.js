import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Login =()=>{

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();

    // check session and navigate
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    const handleLogin= async ()=>{
        console.warn(email,password);
        let result = await fetch("http://localhost:1000/login_user",{
            method: 'post',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name)
        {
           localStorage.setItem("user",JSON.stringify(result));
           navigate('/');
        }
        else{
            alert('Please enter details');
        }
    }

    return (
     <div className="container">
         <br />
        <h1>Login</h1>
        <hr/>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" placeholder="Enter your email" />
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="password" name="password" id="password"  onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" placeholder="Enter your password" />
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <button onClick={handleLogin} className="btn btn-primary" type="submit" name="btnSubmitLogin" id="btnSubmitLogin">Login</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        
     </div>
    )
}

export default Login