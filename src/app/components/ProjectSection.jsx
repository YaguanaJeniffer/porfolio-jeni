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
      "Se centra en la creación de una plataforma que permite presentar de manera efectiva su conjunto de habilidades, logros y trabajos relevantes.",
    image: "/images/ProjectsPorfolio/imagen1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/YaguanaJeniffer/porfolio-jeni.git",
    skills: ["/icons/next.png", "/icons/tailwind.png"],
  },
  {
    id: 2,
    title: "Amortización Web",
    description:
      "Plataforma en línea intuitiva y fácil de usar que permite a los usuarios calcular y administrar sus préstamos con precisión. Ofrece múltiples métodos de amortización, como el clásico sistema de amortización francés y alemán.",
    image: "/images/ProjectsPorfolio/imagen2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Puetate/simulator-amortization-app.git",
     skills: ["/icons/next.png", "/icons/tailwind.png"],
  },
  {
    id: 3,
    title: "Merecimientos Posgrados",
    description:
      "Es un programa de posgrado innovador que se distingue por su enfoque integral en la formación académica y profesional. Diseñado para identificar y evaluar a los candidatos que desean impartir materias en programas académicos avanzados.",
    image: "/images/ProjectsPorfolio/imagen3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/utaPosgrados/MerecimientosPosgrados",
     skills: ["/icons/next.png", "/icons/tailwind.png"],
  },
  {
    id: 4,
    title: "ArteCTT-ADMIN",
    description:
      "Plataforma de gestión para la aplicación móvil ArteCTT. Permite a los administradores controlar qué pinturas se destacan, promover eventos y gestionar publicaciones. Facilita la personalización ágil de la experiencia del usuario al destacar contenido relevante.",
    image: "/images/ProjectsPorfolio/imagen4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TigselemaAlex/ArteCTT-ADMIN",
     skills: ["/icons/next.png", "/icons/tailwind.png"],
  },
  {
    id: 5,
    title: "Buses-Link",
    description:
      "Buses-Link es una solución integral que une a vendedores, usuarios y cooperativas de autobuses en una sola plataforma. Con una app móvil para usuarios y un sitio para vendedores, facilita la compra de boletos de distintas cooperativas. Además, ofrece un portal para la gestión eficiente de las cooperativas. Simplifica la compra de boletos y optimiza la experiencia de viaje.",
    image: "/images/ProjectsPorfolio/imagen5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/YaguanaJeniffer/Frontend-Cliente",
     skills: ["/icons/next.png", "/icons/tailwind.png"],
  },
  {
    id: 6,
    title: "Facturación Electronica",
    description:
      "El proyecto de Facturación Electrónica es una plataforma digital creada para transformar el proceso de facturación en las microempresas. Se enfoca en desarrollar un sistema intuitivo y seguro que simplifique la emisión, envío y almacenamiento de facturas.",
    image: "/images/ProjectsPorfolio/imagen6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Puetate/facturacion-electronica-app.git",
     skills: ["/icons/next.png", "/icons/tailwind.png"],
  },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
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
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelect={tag === "Web"}
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