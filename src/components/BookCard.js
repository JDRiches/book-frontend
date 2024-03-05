import React from 'react'


function BookCard({title, image, author}) {
    return (
      <div className='bg-slate-200 p-5 gap-10 w-52 h-80 rounded-md col-span-1 shadow-md  flex flex-col '>
          <div className='h-1/2'>
              <img src={image} className=' object-fill h-48 w-96 rounded-md m-auto'/>
          </div>
          <div className='bg-slate-200 rounded-md align-text-bottom h-1/4 m-auto'>
              <h1 className='font-bold'>{title}</h1>
              <h2 className='align-text-bottom'>{author}</h2>
          </div>
      </div>
    )
}
export default BookCard
