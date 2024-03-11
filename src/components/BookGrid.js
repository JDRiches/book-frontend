import React from 'react'
import BookCard from './BookCard'


function BookGrid({bookData}) {


  return (
    <div className=' bg-slate-100 m-5 p-4 rounded-md grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center items-start'>
         {bookData.map((book) => {
        return <BookCard key={book.id} title={book.title} image={book.image} author={book.author} id={book.id} read={book.read}/>
      })}

    </div>
  )
}

export default BookGrid
