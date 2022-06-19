import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const SignUp =()=>{
    
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    // to navigate
    const navigate = useNavigate();
    // navigate from session/local storage if available
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
             navigate('/')
        }
    })

    const addNewUserData=async ()=>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:1000/add_user',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
         //save data into session local storage
         localStorage.setItem("user",JSON.stringify(result));
         //navigate
         navigate('/');
    }

    return(
        <div className="container">
        
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h1>Create New Account</h1><hr/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="Enter your name" className="form-control" />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Enter your email" className="form-control" />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="Enter your password" className="form-control" />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <button type="submit" onClick={addNewUserData} class="btn btn-primary" name="btnRegister" id="btnRegister">Submit</button>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default SignUp;