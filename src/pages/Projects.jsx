import React from 'react'
import foodImage from "../assets/food.png"; 
import musicImage from "../assets/music.jpg"; 
import technologyImage from "../assets/technology.png";


const Projects = () => {
      const projects = [
        {   
            id: 1, 
            title: "Food project", 
            topic: "lorem ipsum, dolor sit amet",
            src: foodImage },
        { 
            id: 2, 
            title: "Music project", 
            topic: "lorem ipsum, dolor sit amet",
            src: musicImage },
        {
          id: 3,
          title: "Technology Project",
          topic: "lorem ipsum, dolor sit amet",
          src: technologyImage
        }
      ];
  return (
    <section>
        <h2 class="text-center text-base/7 font-semibold text-cyan-600  mt-20">
        Our Projects
      </h2>
      <p class="mx-auto  max-w-lg text-center text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
        Projects from our Hackathons
      </p>
    <div className='flex flex-col gap-4'>
      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
            
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col relative p-5 bg-no-repeat  drop-shadow-2xl backdrop-blur-sm bg-center bg-cover  rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            <div
            className={`absolute top-0 w-[100%] h-[100%] left-0 bg-black opacity-15`}>
            </div>
            <div className="bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
                </h3>
                <p>{project.topic}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col relative p-5 bg-no-repeat drop-shadow-2xl backdrop-blur-sm bg-center bg-cover  rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            {/* <img src={project.src} alt="" /> */}
            <div
            className={`absolute top-0 w-[100%] h-[100%] left-0 bg-black opacity-15`}>
            </div>
            <div className="bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
                </h3>
                <p>{project.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col gap-4'>
      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col relative p-5 bg-no-repeat drop-shadow-2xl backdrop-blur-sm bg-center bg-cover  rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            {/* <img src={project.src} alt="" /> */}
            <div
            className={`absolute top-0 w-[100%] h-[100%] left-0 bg-black opacity-15`}>
            </div>
            <div className="bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
                </h3>
                <p>{project.topic}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col relative p-5 bg-no-repeat drop-shadow-2xl backdrop-blur-sm bg-center bg-cover  rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            {/* <img src={project.src} alt="" /> */}
            <div
            className={`absolute top-0 w-[100%] h-[100%] left-0 bg-black opacity-15`}>
            </div>
            <div className="bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
                </h3>
                <p>{project.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col gap-4'>
      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col relative p-5 bg-no-repeat drop-shadow-2xl backdrop-blur-sm bg-center bg-cover  rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            {/* <img src={project.src} alt="" /> */}
            <div
            className={`absolute top-0 w-[100%] h-[100%] left-0 bg-black opacity-15`}>
            </div>
            <div className="bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
                </h3>
                <p>{project.topic}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col relative p-5 bg-no-repeat drop-shadow-2xl backdrop-blur-sm bg-center bg-cover  rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            {/* <img src={project.src} alt="" /> */}
            <div
            className={`absolute top-0 w-[100%] h-[100%] left-0 bg-black opacity-15`}>
            </div>
            <div className="bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
                </h3>
                <p>{project.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Projects