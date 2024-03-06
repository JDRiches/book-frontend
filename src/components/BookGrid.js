import React from 'react'
import BookCard from './BookCard'


function BookGrid({bookData}) {

    const clickFunc = () => {
        console.log("Clicked!!")
    }

  return (
    <div className=' bg-slate-300 m-5 rounded-md grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center py-12'>
         {bookData.map((book) => {
        const imageLink = "imageLinks" in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        const author = "authors" in book.volumeInfo ? book.volumeInfo.authors[0] : "Author Not Found"
        return <button onClick={clickFunc}><BookCard title={book.volumeInfo.title} image={imageLink} author={author}/></button>
      })}

    </div>
  )
}

export default BookGrid
