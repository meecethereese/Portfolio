import { useThree, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useMotionValue, animate } from "framer-motion";

export const projects = [
    {
        title: "Contact Manager",
        image: "projects/ContactManager.jpg",
        description: "Created a contact manager web application following LAMP stack structure that showcased CRUD applicability for UCF's Processes for Object-oriented Software Development course."
    },
    {
        title: "MSP430FR6989",
        image: "projects/MSP430.jpg",
        description: "Worked with Texas Instruments' MSP430FR6989 microcontroller board and programmed many different auxiliaries for UCF's Embedded Systems course."
    },
    {
        title: "Range Finder", 
        image: "projects/RangeFinder.jpg",
        description: "Spent many weeks in UCF's Junior Design course learning the entire process that goes into circuit design for multiple components from drawing schematics in Eagle to sourcing parts and finally assembly."
    },
    {
        title: "Application Master",
        image: "projects/ApplicationMaster.jpg",
        description: "Constructed a data manager program for job applications within Google Apps Script to assist with organization and tracking."
    },
];

const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4)
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    });

    return (
        <group {...props} rotation={[0, -Math.PI / 2, 0]} position={[0, 0, 0]}>
            <mesh 
                position-z={-0.001}
                ref={background}
            >
                <planeGeometry args={[2.2, 2]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image 
                scale={[2, 1.2, 1]} 
                url={project.image} 
                toneMapped={false} 
                position-y={0.3} 
            />
            <Text
                maxWidth={2} 
                anchorX={"left"} 
                anchorY={"top"} 
                fontSize={0.2} 
                position={[-1, -0.4, 0]}
            >
                {project.title.toUpperCase()}
            </Text>
        </group>
    );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return (
    <group 
        position-y={-viewport.height * 2 + 2}
    >
        {
            projects.map((project, index) => (
                <motion.group 
                    key={"project_" + index}
                    animate={{
                        z: currentProject === index ? 0 : 4 + index * -2.5,
                        x: currentProject === index ? -3 : 1,
                        y: currentProject === index ? 1.5 : 0,
                        rotateZ: currentProject === index ? 0 : -Math.PI / 3,
                        rotateY: currentProject === index ? 0 : -0.1 * Math.PI,
                    }}
                >
                    <Project project={project} highlighted={index===currentProject} />
                </motion.group>
            ))
        }
    </group>
    );
};