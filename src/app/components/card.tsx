interface CardProps {
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    sourceUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, tags, demoUrl, sourceUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-6 w-[600px]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="flex space-x-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-[#FD5956] text-[#FFFFFF] px-2 py-1 rounded-md text-sm">{tag}</span>
                    ))}
                </div>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-[#FD5956] hover:underline">Voir la démo</a>
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">Voir le code source</a>
            </div>
        </div>
    );
};

export default Card;
