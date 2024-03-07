import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <div class="flex flex-col items-center justify-center  h-screen bg-slate-200 text-gray-700">
            <form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                <label class="font-semibold text-xs" for="usernameField">Email</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={(e)=>setEmail(e.target.value)} />
                <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={onLogin}>Login</button>
                <div class="flex mt-6 justify-center text-xs">
                    <a class="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                    <span class="mx-2 text-gray-300">/</span>
                    <NavLink to="/signup" class="text-blue-400 hover:text-blue-500" href="#">Sign Up</NavLink>
                </div>
            </form>


        </div>
    )
}




export default Login
