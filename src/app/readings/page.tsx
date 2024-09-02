import Navbar from "../Navbar";
import ReadingsCard from "./ReadingsCard";

const cards = [
    {title:"8 Reasons Why WhatsApp Was Able to Support 50 Billion Messages a Day With Only 32 Engineers", author: "Neo Kim", description:"They had a core product focus with no feature creep, focusing on messaging and reliability. They had continuous testing for single points of failure. They leveraged existing open-source code to not reinvent the wheel. They kept the team small with talented and driven engineers. These are the points that stood out to me. It blows my mind that 32 engineers wrote code that supported 50b messages a day from 450m daily active users. So cool. Wizards.", date:"08/22/2024"},
    {title:"Zero to One: Notes on Startups, or How to Build the Future", author: "Peter Thiel", description:"Start small and monopolize, focus on one thing and become really good at it. Be 10x better than your competition. Build a strong foundation, work with people who are equally as obsessed about the problem. A distribution plan matters, one good one is enough. Most importantly, think differently to find value where no one else is looking, then build to go from 0 to 1.", date:"07/27/2024"},
    {title: "The Inner Game of Tennis: The Classic Guide to the Mental Side of Peak Performance", author:"W. Timothy Gallwey", description: "You have two selves: Self 1 is the conscious mind which gives instructions and intereferes with performance and Self 2 is the subconscious mind which performs actions naturally and efficiently. Trust yourself and let Self 2 takeover. Let go of judgements. Visualize desired outcomes.\n\nI applied these concepts and had the best BJJ tournament performance I've ever had - winning gold with four fights, two submissions, and no points scored on me.\n\nMy mantra was: \"Believe and Go\". ", date:"07/2/2023"},
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
            {cards.map((card, index) => ( <ReadingsCard key={index} title={card.title} author={card.author} description={card.description} date={card.date || ""}/>))}
          </div>
        </div>
      </div>
    </div>
  );
}
