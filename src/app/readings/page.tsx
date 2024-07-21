'use client'
import Navbar from "../Navbar";
import ReadingsCard from "./ReadingsCard";

const cards = [
    {title: "Can't Hurt Me", author:"David Goggins", description: "Embrace the suck. Stay hard. Take souls."},
    {title: "The Mom Test: How to talk to customers and learn if your business is a good idea", author:"Rob Fitzpatrick", description: "Always understand what the users are currently doing to solve their pain point, not what they would do based on some hypothetical. Drill down on emotions and opinions. Avoid bad data like compliments and fluff. Results of a good meeting are facts and commitment. Always go into a meeting knowing what you want to learn."},
    {title:"Meditations", author:"Marcus Aurelius", description:"Master your thoughts. Be present, be good, be just. Know your way."},
    {title: "How to Write Usefully", author: "Paul Graham", description: "Writing should be useful. Useful writing combines importance + novelty + correctness + strength. When first writing, do two things: narrow the topic so that you are an expert in what you discuss and publish more."},
  ];

export default function Readings() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white text-sm min-h-screen pb-8">
        <div className="flex flex-col items-start text-left max-w-xl space-y-4">
          <p>Some useful and good readings I like + what I learned from them:</p>
          <div className="w-full space-y-8">
            {cards.map((card, index) => ( <ReadingsCard key={index} title={card.title} author={card.author} description={card.description}/>))}
          </div>
        </div>
      </div>
    </div>
  );
}
