"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag  from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "React",
        description: "Project1",
        image: "/images/avatar.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "React",
        description: "Project1",
        image: "/images/AboutMe.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "React",
        description: "Project1",
        image: "/images/avatar.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "React",
        description: "Project1",
        image: "/images/avatar.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "React",
        description: "Project1",
        image: "/images/avatar.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    
    const filteredProject = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects    
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelect={tag === "Web"}
                />
            </div>
            <div>
                {filteredProject.map((project) =>
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />)}
            </div>
        </section>
    )
};

export default ProjectsSection;