import React from 'react'

const BottomSheet = ({data}) => {
  return (
    <div className='rounded-sm'>
    <div className="shadow-lg  p-10 space-y-5 w-[60vw] lg:w-[34vw] rounded-t-md bg-white">
     {data.map((item) => <div className=''>
      <p>{item.title}</p>
       <p>{item.text}</p>
     </div>)}
     
      </div>
    </div>
  )
}

export default BottomSheet
