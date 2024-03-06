import React, {useState, useEffect} from 'react'


function SearchBar({updateList}) {

    const [query, setQuery] = useState("")

    useEffect(() => {
        const timeOutId = setTimeout(() => {updateList(query)},1000);
        return () => clearTimeout(timeOutId)
    }, [query])

  return (
    <div className='flex flex-row-reverse p-5 gap-5 justify-center align-middle'>
        <input onChange={(event) => {setQuery(event.target.value)}} type='text' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500'/>
        <h1 className='my-auto font-bold'>Search</h1>
    </div>
  )
}

export default SearchBar
