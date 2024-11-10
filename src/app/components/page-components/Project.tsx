"use client";
import React from 'react';
import Image from 'next/image';
import project1 from '../../../../public/assets/projects/todo_auth.png';
import project2 from '../../../../public/assets/projects/random_pass.png';
import project3 from '../../../../public/assets/projects/bg_changer.png';

import '../../css/project.css';
import Link from 'next/link';

const ProjectsShowcase: React.FC = () => {
    const projects = [
        { image: project1, title: 'TodoApp with Authentication', description: 'TodoAuthApp is a secure, full-stack to-do application featuring user authentication. It allows users to register, log in, and manage their tasks in a secure environment. Built using Node.js, Express, MongoDB, and React, it employs JWT for session management and user security.' },
        { image: project2, title: 'Random Password Generator', description: 'A dynamic password generator tool that lets users create strong, randomized passwords based on adjustable criteria, ensuring security across different sites. Built with JavaScript and CSS for an interactive experience.' },
        { image: project3, title: 'Bg Changer with Eye Animation', description: 'An interactive background changer with a unique eye animation that follows the cursor. Built using HTML, CSS, and JavaScript to create a visually appealing experience that reacts to user interaction.' },
    ];

    return (
        <section className='projects-showcase'>
            <div className='projects-header'>
                <h2>My Projects</h2>
                <p>Here are some of the projects I have worked on:</p>
            </div>
            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <div className="project-image-div">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                layout="fill"
                                objectFit="cover"
                                className='project-image' 
                            />
                        </div>
                        <div className='project-content'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Link href="#" onClick={(e) => e.preventDefault()} className="project-link">View Project</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsShowcase;