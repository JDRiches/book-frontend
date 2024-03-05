import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import BookGrid from '../components/BookGrid'
import axios from 'axios'

function Search() {

    const [query, setQuery] = useState("")
    const [bookData, setBookData] = useState([])

    useEffect(()=>{
      if(query != ""){
        console.log(query)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query.replace(/ /g,"+"))
        .then(res =>{
          console.log(res.data.items)
          setBookData(res.data.items)    
     })
  }
  }, [query])

  return (
    <div>
      <SearchBar updateList={setQuery}/>
      <BookGrid bookData={bookData}/>
    </div>
  )
}

export default Search
