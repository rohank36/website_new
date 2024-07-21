'use client'
import Navbar from "../Navbar";

export default function Readings() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white text-sm min-h-screen pb-8">
        <div className="flex flex-col items-start text-left max-w-xl space-y-4">
          <p>Readings</p>
        </div>
      </div>
    </div>
  );
}
