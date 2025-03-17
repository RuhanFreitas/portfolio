import Card from '../components/Card';

const Projects = () => {
    return (
        <div
            id="projects"
            className="z-20 flex flex-col lg:w-6xl md:h-screen md:m-auto pt-36 gap-12 md:gap-8 mb-32 md:pb-0"
        >
            <h2 className="text-[#F1F1F1] text-md md:text-xl">Projects</h2>
            <div className="text-[#F1F1F1] space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-32">
                <Card
                    title="Auth API"
                    description="Auth API built with TypeScript..."
                    subdescription="TypeScript, Express, JWT..."
                    isEnd={false}
                />
                <Card
                    title="Library System"
                    description="Library API built with TypeScript..."
                    subdescription="TypeScript, Express, JWT..."
                    isEnd={true}
                />
                <Card
                    title="Anhanguera Educacional"
                    description="Bachelors in Software Engineering"
                    subdescription="Feb 2024 - Jun 2027"
                    isEnd={false}
                />
                <Card
                    title="Anhanguera Educacional"
                    description="Bachelors in Software Engineering"
                    subdescription="Feb 2024 - Jun 2027"
                    isEnd={true}
                />
            </div>
        </div>
    );
};

export default Projects;
