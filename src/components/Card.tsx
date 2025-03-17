interface ICard {
    title: string;
    description: string;
    subdescription: string;
    isEnd: boolean;
}

const Card = ({ title, description, subdescription, isEnd }: ICard) => {
    return (
        <div className={`flex flex-col gap-4 ${isEnd ? 'lg:items-end' : ''}`}>
            <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
            <p className="text-md md:text-xl text-[#E0115F]">{description}</p>
            <p className="text-md md:text-lg text-[#5D0B2A]">
                {subdescription}
            </p>
        </div>
    );
};

export default Card;
