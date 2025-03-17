import Card from '../components/Card';

const Education = () => {
    return (
        <div
            id="education"
            className="z-20 flex flex-col lg:w-6xl md:h-screen md:m-auto pt-36 gap-12 md:gap-8"
        >
            <h2 className="text-[#F1F1F1] text-md md:text-xl">Education</h2>
            <div className="text-[#F1F1F1] space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-32">
                <Card
                    title="Anhanguera Educacional"
                    description="Bachelors in Software Engineering"
                    subdescription="Feb 2024 - Jun 2027"
                    isEnd={false}
                />
                <Card
                    title="CNA Languages"
                    description="Certificate in English proficiency"
                    subdescription="Feb 2020 - Jun 2024"
                    isEnd={true}
                />
                <Card
                    title="Python Bootcamp"
                    description="Udemy certificate in Python"
                    subdescription="Feb 2024 - Jun 2027"
                    isEnd={false}
                />
                <Card
                    title="JavaScript & TypeScript"
                    description="udemy certificate in JS & TS"
                    subdescription="Feb 2024 - Jun 2027"
                    isEnd={true}
                />
            </div>
        </div>
    );
};

export default Education;
