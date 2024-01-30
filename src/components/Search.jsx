import React from 'react'

const Search = () => {
  return (
    <section className='w-full mx-auto my-5 text-center text-[18px] flex justify-center'>
        <form action="" className='border-[2px] border-orange-500 sm:w-[459px] w-[200px] rounded-md p-0'>
            <input type="text" placeholder='get your exercise in an instance' className='px-4 py-2 w-[370px] border-none outline-none'/>
            <button className='px-4 py-2 bg-orange-500  text-dimWhite hover:text-white'>Search</button>
        </form>
    </section>
  )
}

export default Search
