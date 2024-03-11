import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Head() {

  const [email, setEmail] = useState("")

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.getIdToken();

          console.log(user)
          setEmail(user.email)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

const handleLogout = () => {               
  signOut(auth).then(() => {
  // Sign-out successful.
      console.log("Signed out successfully")
  }).catch((error) => {
  // An error happened.
  });
}

  return (
    <div className='flex flex-row p-5 bg-slate-100'>
        <div className='flex flex-row w-1/2 font-bold'>
            <a>Book App</a>
            <a>{email}</a>
            <button onClick={handleLogout}>Sign out</button>
        </div>
        <div className='flex flex-row-reverse w-1/2 gap-10 font-bold'>
            <a>Friends</a>
            <a>Collections</a>
            <NavLink to="/read">Read</NavLink>

            <NavLink to="/">Search</NavLink>
        </div>
    </div>
  )
}

export default Head
