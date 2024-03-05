import React from 'react'


function Head() {
  return (
    <div className='flex flex-row p-5 bg-slate-100'>
        <div className='flex flex-row w-1/2 font-bold'>
            <a>Book App</a>
        </div>
        <div className='flex flex-row-reverse w-1/2 gap-10 font-bold'>
            <a>Friends</a>
            <a>Collections</a>
            <a>Read</a>
            <a>Search</a>
        </div>
    </div>
  )
}

export default Head
