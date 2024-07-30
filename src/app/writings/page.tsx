'use client'
import Navbar from "../Navbar";


export default function Writings() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white text-sm min-h-screen pb-8">
        <div className="flex flex-col items-start text-left max-w-xl space-y-4">
          <p>Some experiences and thoughts of mine that I think can be useful to others + a way for me to practice clear communication and storytelling:</p>
        </div>
      </div>
    </div>
  );
}
