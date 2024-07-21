interface ReadingsCardProps {
    title: string;
    author: string;
    description: string;
}

const ReadingsCard = ({title, author, description} : ReadingsCardProps) =>{
    return(
        <div className="w-full bg-gray-900 text-white rounded-xl hover:shadow-hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="p-4 space-y-2 line-clamp-8">
                <h1 className="text-lg"><i>{title}</i> by {author}</h1>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}

export default ReadingsCard;