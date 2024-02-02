import React from 'react'

const SimilarCard = ({data}) => {
    console.log(data);
  return (
    <div className='flex flex-col justify-start items-center text-left w-[250px] h-[330px] border-[2px] border-yellow-300 rounded-md '>
      <div>
        <img src={data.gifUrl} alt={data.name} />
      </div>
      <div>
        <h2 className=''>{data.name}</h2>
        <p>{data.target}</p>
      </div>
    </div>
  )
}

export default SimilarCard;
