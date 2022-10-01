
import { useState } from 'react';
import BottomSheet from './Components/BottomSheet';
import "./App.css"

function App() {
  const [isOpen,setOpen]=useState(false)
  return (
    <div
      onClick={() => {
        console.log("clicked")
        return isOpen ? setOpen(false) : ""
      }}
      className="">
      <div className='flex justify-center py-20 '>
        <button
          onClick={()=>setOpen(true)}
          className='px-10 py-3 bg-[#2acdff] rounded-sm text-white font-bold'>Open Bottom Sheet</button>
      </div>
     
      <div className={`sheet ${isOpen?"animatedSheet":"nonAnimatedSheet"}`}>
        <BottomSheet data={[1,2,3,4,5,6]}/>
      </div>
      
    </div>
  );
}
// buttomSheet
export default App;
