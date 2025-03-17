const Navbar = () => {
    return (
        <div className="fixed z-30 mt-6 md:mt-8 m-auto bg-[#181717] w-fit px-8 md:px-14 py-3 md:py-4 rounded-full flex gap-6 md:gap-12 text-[#F1F1F1] text-sm justify-center items-center">
            <a href="#home">
                <h1 className="cursor-pointer">Ruhan Freitas</h1>
            </a>
            <ul className="hidden md:flex gap-12 text-[#E0115F]">
                <a href="#education">
                    <li className="cursor-pointer">Education</li>
                </a>
                <a href="#projects">
                    <li className="cursor-pointer">Projects</li>
                </a>
            </ul>
            <ul className="flex gap-2 text-[#E0115F]">
                <a
                    href="https://github.com/RuhanFreitas/"
                    target="_blank"
                    className="cursor-pointer"
                >
                    <img src="/github.svg" alt="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ruhanfreitas/"
                    target="_blank"
                    className="cursor-pointer"
                >
                    <img src="/linkedin.svg" alt="" />
                </a>
                <a
                    href="mailto:jspruhanfreitas@gmail.com"
                    target="_blank"
                    className="cursor-pointer"
                >
                    <img src="/email.svg" alt="" />
                </a>
            </ul>
        </div>
    );
};

export default Navbar;
