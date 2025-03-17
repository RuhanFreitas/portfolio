import Navbar from './components/Navbar';
import Education from './sections/Education';
import Home from './sections/Home';
import Projects from './sections/Projects';

const App = () => {
    return (
        <div className="bg-[#0C0C0D] overflow-hidden flex flex-col items-center">
            <div className="fixed absolute w-80 h-80 left-0 rounded-full bg-[#E0115F] blur-3xl opacity-10" />
            <div className="fixed absolute w-80 h-80 left-150 top-80 rounded-full bg-[#E0115F] blur-3xl opacity-10" />
            <div className="fixed absolute w-80 h-80 right-0 top-20 rounded-full bg-[#E0115F] blur-3xl opacity-10" />
            <div className="fixed absolute w-80 h-80 right-0 top-80 rounded-full bg-[#E0115F] blur-3xl opacity-10" />
            <Navbar />
            <Home />
            <Education />
            <Projects />
        </div>
    );
};

export default App;
