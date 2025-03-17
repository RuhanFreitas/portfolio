const Home = () => {
    return (
        <div
            id="home"
            className="z-20 flex md:flex-col xl:w-6xl md:h-screen m-auto pt-20 md:pt-36"
        >
            <div className="flex flex-col md:flex-row">
                <div className="text-[#F1F1F1] flex flex-col gap-4 md:gap-8 md:w-1/2 pt-6">
                    <h1 className="text-3xl font-semibold md:font-normal md:text-6xl md:text-start text-center px-2 md:px-0">
                        Hi, I'm Ruhan Freitas
                    </h1>
                    <p className="text-center text-lg md:text-start md:text-xl/8 text-[#808080] px-2 md:px-0">
                        Software Engineer passionate about building clean and
                        efficient applications. Focused on Frontend development
                        but open to Backend and Fullstack roles. Always learning
                        and improving to deliver high-quality solutions.
                    </p>
                    <div className="m-auto md:m-0">
                        <button className="cursor-pointer bg-[#E0115F] text-black font-medium px-6 py-2 rounded-full">
                            Download CV
                        </button>
                        <a
                            href="https://www.linkedin.com/in/ruhanfreitas/"
                            target="_blank"
                            className="cursor-pointer px-6 py-2 text-[#E0115F] font-medium rounded-full"
                        >
                            See experiences
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center pt-12 md:pt-0 md:justify-start md:items-end">
                    <div className="absolute bg-[#E0115F] w-50 h-50 md:w-100 md:h-100 rounded-full opacity-25 blur-xl"></div>
                    <img
                        src="/photo1.png"
                        className="w-50 md:w-100 opacity-30 rounded-full"
                        alt=""
                    />
                </div>
            </div>
            <div className="hidden md:flex items-center md:justify-evenly pt-8">
                <img src="/js.svg" className="pt-16" alt="" />
                <img src="/ts.svg" alt="" />
                <img src="/py.svg" className="pt-16" alt="" />
                <img src="/react.svg" alt="" />
                <img src="/nodejs.svg" className="pt-16" alt="" />
            </div>
        </div>
    );
};

export default Home;
