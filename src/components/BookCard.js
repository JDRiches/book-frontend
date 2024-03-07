import React from 'react'


function BookCard({title, image, author}) {
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
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Read It?
                </button>
            </div>

          </div>
      </div>
    )
}
export default BookCard
