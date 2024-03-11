import React, {useEffect, useState} from 'react'
import BookGrid from '../components/BookGrid'
import axios from 'axios'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function Read() {

    const [bookData, setBookData] = useState([])



  const [token, setToken] = useState()

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {  
              axios.get("http://127.0.0.1:8000/read/", { headers: {"Authorization" : `Bearer ${user.accessToken}`}})
              .then(res =>{
                console.log(res.data.books)
                setBookData(res.data.books)
           })
            
          } else {
            console.log("user is logged out")
          }
        });
       
  }, [])


  return (
    <div>
        <div className='m-4 p-1'>
            <div className='text-xl font-bold'>
                <h1>Read Books</h1>
            </div>
        </div>
        <BookGrid bookData={bookData}/>
    </div>
  )
}

export default Read
