import Navbar from "../Navbar";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const jobs = [
    {job:"Co-Founder",company:"ProspectPrep Consulting",date:"May 2024 - Present",description:"Helping highschool student athletes get recruited to their target schools.", learning:"Learning a lot about building business operations, branding, and marketing."},
    {job:"Software Developer Intern",company:"RBC (Amplify Program)",date:"May - Aug 2024",description:"Was very cool to build a product and work on aspects of product building outside of programming like user research, quantifying business value, communicating value clearly, and UI/UX design.", learning:"Communicating value for a product is best done through a simple specific personal story."},
    {job:"Software Developer Intern",company:"CarInspect",date:"Jan - April 2024",description:"asdf"},
    {job:"CS Research Assistant",company:"McGill University",date:"May - July 2023",description:"asdf"},
    {job:"Data Science Intern",company:"Birch Hill Equity Partners",date:"May - Aug 2022",description:"Delivered a lot of knives across the US.", learning:"To help build great companies, you must be on the ground seeing it operate."},
    {job:"Infantry Lieutenant",company:"Singapore Army",date:"Oct 2019 - Aug 2021",description:"Shot guns, rode helicopters, survived in the jungle, planned and executed missions, led soldiers, made friends, served my country.", learning:"The only constant in life is change. Don't greet the Brigade Sergeant Major with dirty boots. Know your mission endstate + challenges, plan your operation accoridngly, prepare for the operation. Take accountability. Always keep track of your smoke grenades. Always be the coolest f***ing cucumber on the block."},
  ]
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white text-sm min-h-screen pb-8">
        <div className="flex flex-col items-start text-left max-w-xl space-y-4">
          <p>A bit about me, professionally: <a href="/doc/Rohan_Kanti_Resume.pdf" className="underline" download>My Resume</a></p>
          <p>What my resume doesn't tell you, thoughts + key learnings: </p>
          <div className="w-full space-y-8">
            {jobs.map((job, index) => ( <ExperienceCard key={index} job={job.job} company={job.company} description={job.description} date={job.date} learning={job.learning || ""}/>))}
          </div>
        </div>
      </div>
    </div>
  );
}
