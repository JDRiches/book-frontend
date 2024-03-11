import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useState, useEffect } from 'react'
import axios from 'axios'

function BookCard({title, id, image, author, read}) {

    const [token, setToken] = useState()
    const [isRead, setIsRead] = useState(read)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {  
                setToken(user.accessToken)
              
            } else {
              console.log("user is logged out")
            }
          });
         
    }, [])

    const readBook = () => {
        const data = {"id": id, "title": title, "image": image, "author": author}
        console.log("Adding: " + data.title)
        axios.post("http://127.0.0.1:8000/read", data,{ headers: {"Authorization" : `Bearer ${token}`}})
        .then(setIsRead('true'))
    }

    const removeBook = () => {
        const data = {"id": id, "title": title, "image": image, "author": author}
        axios.delete("http://127.0.0.1:8000/read",{ data: data, headers: {"Authorization" : `Bearer ${token}`}})
        .then(setIsRead('false'))
    }

    const notReadButton = () =>
    {
        return (
            <button onClick={readBook} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Read It?
        </button>
        )
    }

    const readButton = () => {
        return (
            <button onClick={removeBook} className=" bg-green-200 hover:bg-green-300 text-white-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Read
        </button>
        )
    }


    return (
      <div className='bg bg-white w-80 p-5 gap-6 rounded-md col-span-1 shadow-md  flex flex-row '>
          <div className='w-1/2'>
              <img src={image} className='shadow-xl object-fill h-48 w-32 rounded-md'/>
          </div>
          <div className='flex flex-col w-1/2'>
            <div className='rounded-md  '>
                <h1 className='font-bold line-clamp-2'>{title}</h1>
                <h2 className='align-text-bottom truncate'>{author}</h2>
            </div>
            <div className='h-full flex flex-row mx-auto align-bottom items-end'>
                {isRead === 'true' ? readButton() : notReadButton()}
            </div>

          </div>
      </div>
    )
}
export default BookCard
