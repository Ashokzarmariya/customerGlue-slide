import React from 'react'

const BottomSheet = ({data}) => {
  return (
    <div className='rounded-sm '>
    <div className="shadow-lg shadow-gray-400 p-10 space-y-5 min-w-[34vw]">
     {data.map((item) => <div className=''>
      <p>{item} title</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
     </div>)}
     
      </div>
    </div>
  )
}

export default BottomSheet
