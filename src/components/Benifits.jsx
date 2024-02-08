import React from 'react'
import { exerciseBenfits } from '../constants'

const BenfitCard=({data})=>{
  return(
    <div className='bg-white max-w-[350px] h-[220px] px-4 py-4 cursor-pointer border-[8px] border-[#f9f0de] hover:border-orange-100 hover:shadow-2xl duration-500'>
      <h1 className='text-[25px] font-[400] pb-2 text-center tracking-wide'>{data.name}</h1>
      <p className='text-[16px] font-normal text-gray-600'>{data.description}</p>
    </div>
  )
}
const Benifits = () => {
  return (
    <div className='py-4'>
      <h1 className='sm:text-[45px] text-[25px] font-semibold capitalize text-center mb-6'>Exercise Benifits</h1>
      <div className='flex flex-wrap gap-8 justify-center items-center'>
        {exerciseBenfits.map((benifit)=>(
          <BenfitCard data={benifit} key={benifit.id}/>
        ))}
      </div>
    </div>
  )
}

export default Benifits
