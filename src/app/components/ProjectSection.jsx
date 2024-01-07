"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag  from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Porfolio",
        description:
        "My portfolio is a dynamic collection of work that captures the essence of my relevant skills and achievements. It works as an innovative platform, highlighting my experience through projects. This digital space not only showcases my capabilities, but also represents my dedication to effectively present my achievements and skills, offering a comprehensive look at my journey and experience in web development.",
        image: "/images/ProjectsPorfolio/imagen1.png",
        tag: ["Show All"],
        gitUrl: "https://github.com/YaguanaJeniffer/porfolio-jeni.git",
        skills: ["/icons/next.png", "/icons/tailwind.png"],
    },
    {
        id: 2,
        title: "Amortización Web",
        description:
        "The Web Amortization platform is an intuitive online tool that gives users the ability to accurately calculate and manage their loans. It offers a variety of amortization methods, including classic systems such as French and German. Its easy-to-use interface allows users to understand and plan their payments, providing efficient loan management for greater financial control.",
        image: "/images/ProjectsPorfolio/imagen2.jpg",
        tag: ["Show All"],
        gitUrl: "https://github.com/Puetate/simulator-amortization-app.git",
        skills: ["/icons/react.png", "/icons/tailwind.png"],
    },
    {
        id: 3,
        title: "Merecimientos Posgrados",
        description:
        "Merimientos Posgrados is an innovative postgraduate program that stands out for its comprehensive approach to academic and professional training. Its primary objective is to identify and evaluate candidates with the intention of teaching subjects in advanced academic programs. This program is designed to offer a comprehensive evaluation that ensures academic excellence.",
        image: "/images/ProjectsPorfolio/imagen3.png",
        tag: ["Show All", "Training Experience"],
        gitUrl: "https://github.com/utaPosgrados/MerecimientosPosgrados",
        skills: ["/icons/laravel.png", "/icons/tailwind.png", "/icons/mysql.png"],
    },
    {
        id: 4,
        title: "ArteCTT-ADMIN",
        description:
        "ArteCTT-ADMIN is a management platform created to enhance the ArteCTT mobile application. Designed for administrators, this tool allows full control over featured paintings, event promotion, and post management. Its goal is to facilitate agile customization of the user experience, highlighting relevant content and offering efficient management of highlights in the mobile application.",
        image: "/images/ProjectsPorfolio/imagen4.jpg",
        tag: ["Show All", "Training Experience"],
        gitUrl: "https://github.com/TigselemaAlex/ArteCTT-ADMIN",
        skills: ["/icons/angular.png", "/icons/css.png"],
    },
    {
        id: 5,
        title: "Buses-Link",
        description:
        "Buses-Link is an integrated solution that connects sellers, users and bus cooperatives on a unified platform. Through a mobile application for users and a site for sellers, it simplifies the purchase of tickets from multiple cooperatives. In addition, it offers an efficient management portal for cooperatives. Its objective is to simplify ticket acquisition and improve the travel experience, providing a comprehensive solution for the bus transportation sector.",
        image: "/images/ProjectsPorfolio/imagen5.jpg",
        tag: ["Show All"],
        gitUrl: "https://github.com/YaguanaJeniffer/Frontend-Cliente",
        skills: ["/icons/react.png", "/icons/css.png"],
    },
    {
        id: 6,
        title: "Capy-Bills",
        description:
        "Capy-Bills is an Electronic Invoicing platform designed to revolutionize the billing process in microbusinesses. Its main focus lies on the creation of an intuitive and secure system, with the purpose of simplifying the issuance, sending and storage of invoices. This project aims to facilitate and streamline the workflow in the world of microbusinesses, offering an effective and efficient solution for billing management.",
        image: "/images/ProjectsPorfolio/imagen6.jpg",
        tag: ["Show All"],
        gitUrl: "https://github.com/Puetate/facturacion-electronica-app.git",
        skills: ["/icons/react.png", "/icons/css.png"],
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("Show All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    
    const filteredProject = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects    
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="Show All"
                    isSelected={tag === "Show All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Training Experience"
                    isSelected={tag === "Training Experience"}
                />
            </div>

            <ul ref={ref}className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProject.map((project, index) =>
                    <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    >
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        skills={project.skills}
                        />
                    </motion.li>
                    )}
            </ul>
        </section>
    )
};

export default ProjectsSection;