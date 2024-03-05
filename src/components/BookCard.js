import React from 'react'


function BookCard() {
    return (
      <div className='bg-white rounded-md col-span-1 shadow-md w-60 flex flex-col'>
          <div className='h-full w-full justify-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" className='object-cover rounded-md m-auto'/>
          </div>
          <div className='align-text-baseline p-5  bg-slate-200'>
              <h1 className='font-bold'>Something about Something</h1>
              <h2>Jason Mars</h2>
          </div>
      </div>
    )
}
export default BookCard
