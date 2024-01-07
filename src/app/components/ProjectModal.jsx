"use client"
import React from "react";
import Image from "next/image";

const ProjectModal = ({ closeModal, imgUrl, title, description, skills }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-3xl w-full relative">
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer z-10">
                    Close
                </button>
                <div className="flex">
                    <div className="w-1/2">
                        <img
                            src={imgUrl}
                            alt={title}
                            className="rounded-lg"
                            style={{ width: '400px', height: '330px' }} // Aquí se establece el tamaño fijo
                        />
                    </div>
                    <div className="w-1/2 ml-4">
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <p>{description}</p>
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
                        <div className="flex">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`bg-gray-200 rounded-full w-12 h-12 mx-2 flex items-center justify-center`}
                                >
                                    <img
                                        src={skill}
                                        alt={`${title}-skill-${index}`}
                                        width={25}
                                        height={25}
                                        className="object-cover rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;