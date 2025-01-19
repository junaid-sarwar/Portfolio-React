import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal'; 

const education = [
    {
        institute: 'Sir Syed University of Engr & Tech',
        degree: 'BS in Computer Science',
        period: '2023 - 2027',
        description:
            'Currently in my 3rd semester, exploring core subjects like Data Structures, Computer Architecture, and Software Engineering. Building a strong foundation in problem-solving, programming, and algorithms to prepare for a career in technology and software development.',
    },
    {
        institute: 'Saylani Mass IT Training Program',
        degree: 'MERN Stack Course',
        period: '2023 - Present',
        description:
            'Actively learning React and other web development tools as part of the MERN Stack curriculum. Gaining practical skills in full-stack development, including creating dynamic web applications and exploring modern frameworks and libraries.',
    },
    {
        institute: 'Govt. College For Men',
        degree: 'Intermediate',
        period: '2021 - 2023',
        description:
            'Completed Intermediate studies with a focus on Computer Science. Learned programming basics, mathematics, and fundamental concepts of computing, which provided a strong base for pursuing a degree in Computer Science.',
    },
    {
        institute: 'S.M. Public Academy',
        degree: 'Matriculation',
        period: '2020 - 2021',
        description:
            'Completed Matriculation with a specialization in Computer Science. Developed foundational knowledge in programming, logic building, and computer operations that sparked my interest in the tech field.',
    },
];

const Education = () => {
    return (
        <div className="p-8 max-w-[600px] mx-auto">
            <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
                Education
            </h1>
            <motion.div
                className="space-y-8"
                initial="hidden"
                animate="visible"
            >
                {education.map((edu, index) => (
                    <Reveal key={index}> 
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
                        >
                            <h2 className="text-gray-100 text-2xl font-semibold">
                                {edu.institute}
                            </h2>
                            <p className="text-gray-300">{edu.period}</p>
                            <p className="text-gray-400 mt-4">{edu.description}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
