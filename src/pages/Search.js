import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import BookGrid from '../components/BookGrid'
import axios from 'axios'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function Search() {

    const [query, setQuery] = useState("")
    const [bookData, setBookData] = useState([])

    useEffect(()=>{
      if(query != ""){
        axios.get("http://127.0.0.1:8000/search/?query=" + query.replace(/ /g,"+"), { headers: {"Authorization" : `Bearer ${token}`}})
        .then(res =>{
          console.log(res.data.items)
          setBookData(res.data.items)    
     })
  }
  }, [query])


  const [token, setToken] = useState()

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {  
              setToken(user.accessToken)
            
          } else {
            console.log("user is logged out")
          }
        });
       
  }, [])

  return (
    <div>
      <SearchBar updateList={setQuery}/>
      <BookGrid bookData={bookData}/>
    </div>
  )
}

export default Search
