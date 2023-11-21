import { useThree, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text, useTexture } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { RGBA_ASTC_10x10_Format } from "three";

export const projects = [
    {
        title: "Application Master",
        imageArr: ["projects/ApplicationMaster.jpg"],
        description: "In order to prepare myself for the SHPE 2023 National Conference, I created a Google Apps Script project to modify the functionality of the spreadsheet I was using and help me keep track of my applications. The basic idea is that you input the application information into the top row and the underlying code organizes it back into the table by company name, date, and job title. Key things I learned from this project were handling on event triggers and working with DATE objects."
    },
    {
        title: "Basys 3 Artix-7",
        imageArr: ["projects/basys.jpg"],
        description: "For UCF's Digital Systems' laboratory, I executed many Xilinx Vivado projects on the Basys 3 Artix-7 FPGA board. The language used to code the logic behind each project was Verilog. Prior to coding the logic functionality, I also had to prove my code's efficacy through boolean algebra alongside truth tables. Some of the project topics dealt with flip-flops, multiplexers, decoders, and binary adders."
    },
    {
        title: "BJT Circuit",
        imageArr: ["projects/BJT.jpg"],
        description: "For UCF's Electronics 1's final laboratory assignment, I was tasked with designing, simulating, and engineering a 3-stage cascading bipolar junction transistor circuit. The goal was to obtain a voltage gain greater than or equal to 50 while maintaining a minimum input resistance of 15k Ω and a maximum output resistance of 100 Ω. I utilized Multisim for the simulations and used an oscilloscope and function generator for the in-lab demo."
    },
    {
        title: "Contact Manager",
        imageArr: ["projects/ContactManager.jpg"],
        description: "For UCF's Processes of Object-oriented Programming course, I worked with a team of 5 to create a contact manager web-application. It was built following a LAMP stack structure and showcased CRUD applicability. My role within the team was API endpoint development. Per the stack, the endpoints were programmed in PHP and were tested on Postman. The documentation was created using SwaggerHub."
    },
    {
        title: "LeetSocial",
        imageArr: [
            "projects/LeetSocialLogin.png",
            "projects/LeetSocialHome.png",
            "projects/LeetSocialProfile.png"
        ],
        description: "LeetSocial is a web/mobile-app for UCF's Processes of Object-oriented Software Development course that serves as a social platform for LeetCode. I served as front-end developer for this project. I worked with React and learned a lot about interfacing with APIs and even got to create one myself that utilized GraphQL and Axios to connect to LeetCode."
    },
    {
        title: "Moody Music Player",
        imageArr: ["projects/mmp.jpg"],
        description: "For the Shellhacks 2023 competition, my team and I set out to create a therapuetic chatbot with facial recognition that could determine your mood. Being a computer engineer, I wanted to implement a microcontroller and introduced the functionality that once the mood was detected the chatbot would utilize APIs to communicate with an ESP32 that was linked to a piezo buzzer and would play a tune to reflect the mood. For example, if the user was sad, it would play the Mario death theme."
    },
    {
        title: "MSP430FR6989",
        imageArr: ["projects/MSP430.jpg"],
        description: "For UCF's Embedded Systems course laboratory, we spent the semester using Texas Instruments' MSP430FR6989 microcontroller board for different projects. Through these projects, I gained valuable experience with all sorts of embedded system concepts such as communication protocols (SPI, UART, I2C), timer interrupts, low power modes, ADC. I also configured different elements including the LED/LCD displays, joystick, and lux sensor."
    },
    {
        title: "Range Finder",
        imageArr: ["projects/RangeFinder.jpg"],
        description: "For UCF's Junior Design course, the semester was spent becoming familiar with circuit integration techniques and I applied that knowledge by designing a range finder device. The majority of this project was conducted on Autodesk's EAGLE platform. There were many steps to this process, beginning with part selection and integrating custom libraries. Then, came designing for the schematic and translating that into a PCB. Lastly, there was the assembly and testing of the model."
    },
];

const NavButton = (props) => {
    const { position, path, onClick } = props;
    const texture = useTexture(path);

    return (
        <mesh
            position={position}
            onClick={onClick}
        >
            <planeGeometry args={[0.2, 0.1]} />
            <meshBasicMaterial map={texture} transparent opacity={1}/>
        </mesh>
    );
};


const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const bgOpacity = useMotionValue(0.4);
    var [idx, setIdx] = useState(0);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4)
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    });

    function handleNav(buttonName) {
        if (buttonName === "Backwards" && idx > 0)
            setIdx(idx - 1);
        else if (buttonName === "Forwards" && idx < project.imageArr.length - 1)
            setIdx(idx + 1);
    }

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
                url={project.imageArr[idx]}
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
            {(highlighted && project.imageArr.length > 1) ? (
                <>
                    <NavButton
                        position={[0.5, -0.8, 0]}
                        path={'textures/caretLeft.png'}
                        onClick={() => handleNav("Backwards")}
                    />
                    <NavButton
                        position={[0.8, -0.8, 0]}
                        path={'textures/caretRight.png'}
                        onClick={() => handleNav("Forwards")}
                    />
                </>
            ): (
                <></>
            )}

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
                        z: currentProject === index ? 0 : -projects.length + index * 2.5,
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