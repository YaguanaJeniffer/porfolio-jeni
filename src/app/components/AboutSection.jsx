"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
        <ul className="list-disc pl-2">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Kotlin</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Laravel</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Git</li>
        </ul>
        ),
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
        <ul className="list-disc pl-2">
            <li>Dancing is one of my passions, especially dance.</li>
            <li>Play the guitar.</li>
            <li>Experiment with new cooking recipes.</li>
            <li>Watching movies and series, there is always something new on my list.</li>
            <li>Travel and explore different cultures</li>
        </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
        <ul className="list-disc pl-2">
            <li>Technical University of Ambato</li>
        </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
        <ul className="list-disc pl-2">
            <li>
            CSEI23 V Conference on computer science, electronics and industrial
            engineering
            </li>
            <li>Angular Framework Desde Cero</li>
        </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("hobbies");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => { 
        startTransition(() => {
            setTab(id);
        });
    }
    return (
    <div>
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/AboutMe.jpeg" width={250} height={50} alt="aboutMe"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
            I&apos;m a passionate full-stack web developer with a special focus
            on creative design. I love merging functionality and aesthetics
            to craft captivating web experiences. My expertise spans
            JavaScript, React, Node.js, HTML, CSS, and more. I&apos;m always
            eager to learn and collaborate on projects that challenge my
            skills and enable the creation of impactful digital experiences.
            </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>{" "}
                    Hobbies { " " }
                </TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}
                    Education{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}
                    Certifications{" "}
                </TabButton>
            </div>
            <div className="mt-8"> {TAB_DATA.find((t) => t.id === tab).content}             
            </div>
        </div>
        </div>
    </section>
    </div>
    );
};

export default AboutSection;