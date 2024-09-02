interface ExperienceCardProps {
    job: string;
    company: string;
    description: string;
    learning: string;
    date: string;
}

const ExperienceCard = ({job, company, description, learning, date} : ExperienceCardProps) =>{
    return(
        <div className="w-full bg-gray-900 text-white rounded-xl hover:shadow-hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="p-4 space-y-2 line-clamp-8">
                <h1 className="text-lg">{job} at <i>{company}</i></h1>
                <p className="text-sm">{description}</p>
                <p className="text-sm">{learning}</p>
                <p className="text-xs">{date}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;