import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from '@formspree/react';
import { badges } from "../config";
import { BallCanvas } from "./Ball";
import { useState } from "react";
import { useThree } from "@react-three/fiber";

const Section = (props) => {
    const { children, mobileTop } = props;

    return (
        <motion.section 
            className={`
                h-screen w-screen p-8 max-w-screen-2xl mx-auto
                flex flex-col items-start
                ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
            `}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition:{
                    duration: 1,
                    delay: 0.6,
                }
            }}
        >
            {children}
        </motion.section>
    );
};

export const Interface = (props) => {
    const { setSection } = props;
    
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection setSection={setSection} />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

const AboutSection = (props) => {
    const { setSection } = props;
    return (
        <Section mobileTop>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0 text-ecru"
            >
                Hi, my name is
                <br />
                <span className="px-1 italic text-satinSheenGold">Mauricio Ferrari</span>
            </h1>
            <motion.p className="text-lg mt-4 md:mt-8 text-platinum"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                I'm a computer engineering student at the
                {window.innerWidth < 768 ? <> </> : <br />}
                University of Central Florida seeking a
                {window.innerWidth < 768 ? <> </> : <br />}
                summer 2024 internship.
            </motion.p>
            <motion.button
                onClick={() => setSection(3)}
                className={`
                    bg-ecru text-jet py-4 px-8
                    rounded-lg font-bold text-lg mt-4 md:mt-12
                `}
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                Contact me
            </motion.button>
        </Section>
    );
};

const SkillsSection = () => {
    const [showText, setShowText] = useState(Array(badges.length).fill(false));
    const viewport = useThree();
    const responsiveRatio = viewport.width / 12;

    const toggleShowText = (index, val) => {
        const newShowText = [...showText];
        newShowText[index] = val;
        setShowText(newShowText);
    };

    return (
        <Section>
            <motion.div className="w-full" whileInView={"visible"}>
                <h2 className="text-3xl md:text-5xl font-bold text-pearl mb-8">Skills</h2>
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {badges.map((badge, index) => (         
                        <button
                            onClick={ () => {
                                if (window.innerWidth < 768)
                                    toggleShowText(index, !showText[index]);
                            }}
                        >    
                            <motion.div 
                                className="w-16 md:w-28 h-12 md:h-28 mt-4 md:mt-12 relative" 
                                key={badge.name}
                                whileHover={ () => {
                                    if (window.innerWidth > 768)
                                        toggleShowText(index, true);
                                }}
                                onHoverEnd={() => {
                                    if (window.innerWidth > 768)
                                        toggleShowText(index, false);
                                }}
                            >
                                <BallCanvas icon={badge.icon} /> 
                                {showText[index] && (<motion.div 
                                    className=" text-xs md:text-lg text-center mt-2 text-gunmetal-50 bg-pearl rounded-lg p-2 shadow-lg font-semibold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {badge.title}
                                </motion.div>)}
                            </motion.div>
                        </button>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length)
    };

    const previousProject = () => {
        setCurrentProject(currentProject - 1 === -1 ? 3 : (currentProject - 1 ) % projects.length)
    };

    return (
        <Section>
            <div className="flex flex-col w-full h-full items-center justify-center gap-8 mt-32">
                <div className="flex justify-center w-full mb-8 text-platinum">
                    <button
                        className="hover:text-ecru transition-colors mr-16"
                        onClick={nextProject}
                    >
                        ← Previous
                    </button>
                    <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
                    <button
                        className="hover:text-ecru transition-colors ml-16"
                        onClick={previousProject}
                    >
                        Next →
                    </button>
                </div>
                <div className="p-4 text-center w-full md:w-1/2 flex flex-col justify-center h-1/6">
                    <p className="text-platinum text-base md:text-lg">
                        {projects[currentProject].description}
                    </p>
                </div>
            </div>
        </Section>
    );
};

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mvojdwnn");

    return (
        <Section>
            <h2 className="text-gunmetal-150 text-3xl md:text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
                {state.succeeded ? (
                    <p className="text-gray-900 text-center">Thanks for your message !</p>
                ) : (
                <form onSubmit={handleSubmit}>
                    <label for="name" className="font-medium text-gunmetal-150 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gunmetal-50 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <label
                        for="email"
                        className="font-medium text-gunmetal-150 block mb-1 mt-8"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gunmetal-50 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <ValidationError
                        className="mt-1 text-red-500" 
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label
                        for="email"
                        className="font-medium text-gunmetal-150 block mb-1 mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full rounded-md border-0 text-gunmetal-50 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <ValidationError 
                        className="mt-1 text-red-500" 
                        errors={state.errors} 
                    />
                    <button disabled={state.submitting} className="bg-gunmetal-150 text-platinum py-4 px-8 rounded-lg font-bold text-lg mt-16">
                        Submit
                    </button>
                </form>
                )}
            </div>
        </Section>
    )
}