import React from 'react'
import BookCard from './BookCard'

function BookGrid() {
  return (
    <div className=' bg-slate-300 m-5 rounded-md grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center py-12'>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  )
}

export default BookGrid
