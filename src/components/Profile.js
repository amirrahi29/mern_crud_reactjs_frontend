import React,{useState,useEffect} from "react";

const Profile =()=>{

    const auth = localStorage.getItem('user');
    
    return(
        <div className="container">
            <br/>
            <center>

            <h3>Name: {JSON.parse(auth).name}</h3>
            <h3>E-mail: {JSON.parse(auth).email}</h3>

            </center>

            <br/>
            <br/>
        </div>
    )
}

export default Profile;