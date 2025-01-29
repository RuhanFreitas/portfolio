interface ProjectProps {
    title: string
    text: string
    image: string
}

const Project: React.FC<ProjectProps> = ({ title, text, image }) => {
    return (
        <a href={title} className="flex border-[1px] rounded-md w-[500px] cursor-pointer">
            <img src={image} alt="project cover" className="w-36 h-60 object-cover rounded-tl-md rounded-bl-md cursor-pointer" />
            <div className="flex flex-col space-y-2 justify-center items-center h-full w-full relative">
                <h2 className="text-xl absolute top-4">{title}</h2>
                <p className="text-base font-light text-center absolute top-14 px-2">{text}</p>   
            </div>
        </a>
    )
  }
  
  export default Project