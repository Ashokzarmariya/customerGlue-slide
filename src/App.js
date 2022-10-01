
import { useState } from 'react';
import BottomSheet from './Components/BottomSheet';

function App() {
  const [isOpen,setOpen]=useState(false)
  return (
    <div
      onClick={()=> isOpen?setOpen(false):"" }
      className="">
      <div className='flex justify-center py-20 '>
        <button
          onClick={()=>setOpen(true)}
          className='px-10 py-3 bg-[#2acdff] rounded-sm text-white font-bold'>Open Bottom Sheet</button>
      </div>
     
      <div className={`absolute left-[33vw] transition-all duration-75 ${isOpen? "bottom-0":"top-[-100vh]"} `}>
        <BottomSheet data={[1,2,3,4,5,6]}/>
      </div>
      
    </div>
  );
}

export default App;
