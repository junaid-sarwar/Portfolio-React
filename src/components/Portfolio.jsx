import React from 'react';
import Project1 from '../assets/project-images/Project1.png';
import Project2 from '../assets/project-images/Project2.png';
import Project3 from '../assets/project-images/Project3.png';
import Project4 from '../assets/project-images/Project4.png';
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        img: Project1,
        title: "Project #1",
        description: "Complete Ecommerce Website FrontEnd Fetching Data from API.",
        links: {
            site: "https://complete-corner-v2.vercel.app/",
            github: "https://github.com/junaid-sarwar/Complete-Corner-React",
        },
    },
    {
        img: Project2,
        title: "Project #2",
        description: "Converted food website from figma to react",
        links: {
            site: "https://foodcheck-web-by-jnd.surge.sh/",
            github: "https://github.com/junaid-sarwar/foodwagon",
        },
    },
    {
        img: Project3,
        title: "Project #3",
        description: "An e-commerce platform with various features.",
        links: {
            site: "https://complete-corner.vercel.app/",
            github: "https://github.com/junaid-sarwar/Complete-Corner-eCommerce-",
        },
    },
    {
        img: Project4,
        title: "Project #4",
        description: "An E-Learning Platform with backend and frontend",
        links: {
            site: "#",
            github: "https://github.com/junaid-sarwar/MUARIF",
        },
    },
];

const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
            {projects.map((project, index) => (
                <Reveal>
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${
                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    } mb-12`}
                >
                    <div className='w-full md:w-1/2 p-4'>
                        <img
                            src={project.img}
                            alt={project.title}
                            className='w-full h-full object-cover rounded-lg shadow-lg'
                        />
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-gray-200 mb-4'>
                            {project.title}
                        </h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex space-x-4'>
                            <a
                                href={project.links.site}
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                View Site
                            </a>
                            <a
                                href={project.links.github}
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiOutlineGithub />
                            </a>
                        </div>
                    </div>
                </div>
                </Reveal>
            ))}
        </div>
    );
};

export default Portfolio;
