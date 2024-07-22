'use client'
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white text-sm min-h-screen pb-8">
        <div className="flex flex-col items-start text-left max-w-xl space-y-4">
          <p>How it's going, I'm Rohan :)</p>
          <p>For a professional understanding of who I am click <span className="underline">here</span>. Else: </p>
          <p>I like building stuff for people. Most of the time that happens to be software.</p>
          <p>Professionally, I do full stack development but want to learn more about cloud infrastructure, cybersecurity, low-level programming, and site reliability.</p>
          <p>Personally, I spend my nights and weekends interested in algorithmic trading, practical deep learning, writing well, building brands, and Brazilian jiu jitsu.</p>
          <p>I grew up in 5 different countries, spanning 3 continents, so I never know how to answer when someone asks me where I'm from.</p>
          <p>I love lasso-spider guard, FC Barcelona, the beach, and Costco rotisserie chickens.</p>
          <p>I desperately want to visit Greece.</p>
          <p>I could eat Japanese food everyday for the rest of my life.</p>
          <p>Kung Fu Panda is one of the best movies ever made.</p>
          <p>My favorite part about most books are the dedications.</p>
          <p>I try to follow my heart.</p>
          <p>I'm incredibly grateful for everything I've been blessed with in my life.</p>
          <p>I'm trying to read more, listen more, and talk less.</p>
          <p>I'm trying to think in terms of years rather than months.</p>
          <p>Given a target - I'm focused, committed, and determined.</p>
          <p>I never miss twice.</p>
          <p>I believe that: </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>The best way to improve is by doing, getting feedback, learning, adjusting, then doing again.</li>
            <li>To achieve great things you need to be healthily obsessed.</li>
            <li>You should never define yourself based on your results but rather how you carry yourself and interact with others.</li>
          </ul>
          <p>Inscribed upon the Temple of Apollo at Delphi is the maxim: "Know Thyself". I'm always trying to learn more about myself: 
            what I love, what I'm really good at, what I can get paid to do, and what I think the world needs - my Ikigai.</p>
          <p>I'm still searching for a problem that I can fall in love with. In the meantime I'm learning, driven, and trying to make money.</p>
          <p>Ultimately, I just want to enjoy life and be remembered as a good son, brother, friend, and human.</p>
          <div className="">
            <p>"Know all the theories, master all the techniques, but as you touch a human soul be just another human soul." - C.G. Jung</p>
            <p>"A smooth sea never made a skilled sailor." - Franklin D. Roosevelt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
