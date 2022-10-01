import { useState } from "react";
import BottomSheet from "./Components/BottomSheet";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  const data = [
    {
      title: "Google Keep",
      text: "Add to a note",
    },
    {
      title: "Google Docs",
      text: "Embed in a document",
    },
    {
      title: "Google Plus",
      text: "Share with your friends",
    },
    {
      title: "Google Hangouts",
      text: "Show to your coworkers",
    },
  ];
  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center py-20 ">
        <button
          onClick={() => setOpen(true)}
          className="px-10 py-3 bg-[#2acdff] rounded-sm text-white font-bold"
        >
          Open Bottom Sheet
        </button>
      </div>

      <div
        className={`sheet ${
          isOpen ? "animatedSheet" : "nonAnimatedSheet"
        }`}
      >
        <BottomSheet data={data} />
      </div>
      <div
        onClick={() => {
          console.log("clicked");
          return isOpen ? setOpen(false) : "";
        }}
        className={` ${
          isOpen ? "block" : "hidden"
        } bg-black z-10 h-screen w-screen absolute opacity-50 top-0`}
      ></div>
    </div>
  );
}
// buttomSheet
export default App;
