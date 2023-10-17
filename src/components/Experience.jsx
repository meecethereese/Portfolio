import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(1, Math.min(1.75 * responsiveRatio, 1.75));

  const [section, setSection] = useState(0);

  const cameraPositionZ = useMotionValue();
  const cameraLookAtZ = useMotionValue();

  useEffect(() => {
    animate(cameraPositionZ, (menuOpened && section === 0) ? -5 : 0, {
      ...framerMotionConfig
    });
    animate(cameraLookAtZ, (menuOpened && section === 0) ? 5 : 0, {
      ...framerMotionConfig
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.z = cameraPositionZ.get();
    state.camera.lookAt(cameraLookAtZ.get(), 0, 0);
  
    if (section === 0) {
    characterContainerAboutRef.current.getWorldPosition(characterGroup.current.position);
    }
  });

  return (
    <>
      <Background />
      <motion.group
        ref={characterGroup}
        rotation={[-5.136605986767211e-18, 0.8141944901923448, 2.486137883548237e-16]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.8,
        }}
        variants={{
          0: {
            scaleX: 2.18 / 1.75 * officeScaleRatio,
            scaleY: 2.18 / 1.75 * officeScaleRatio,
            scaleZ: 2.18 / 1.75 * officeScaleRatio,
          },
          1: {
            y: -viewport.height + 2,
            x: -5.5,
            z: isMobile ? 0.3 : 0,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI : -Math.PI / 2,
            rotateZ: 0,
            scaleX: isMobile ? 1.25 : 1,
            scaleY: isMobile ? 1.25 : 1,
            scaleZ: isMobile ? 1.25 : 1,
          },
          2: {
            y: -viewport.height * 2 + 1.5,
            x: -5,
            z: isMobile ? -1.4 : -2.5,
            rotateX: Math.PI / 16,
            rotateY: Math.PI / 6,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3 + 2.1,
            x: -6.5,
            z: 0.25,
            rotateX: 0,
            rotateY: -5 * Math.PI / 6,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >
        <Avatar animation={characterAnimation} wireframe={section === 1} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group 
        position={[
          isMobile ? 2 : 0, 
          isMobile ? -viewport.height / 2: 0, 
          isMobile ? -0.75 : 2 * Math.min(1, officeScaleRatio),
        ]} 
        scale={[
          officeScaleRatio, 
          officeScaleRatio, 
          officeScaleRatio,
        ]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 2 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Office section={section}/>
        <group
          ref={characterContainerAboutRef}
          name="Empty"
          position={[0.48, 0.058, 1.12]}
          rotation={[-Math.PI, 1.542, -Math.PI]}
          scale={1.228}
        ></group>
      </motion.group>
      {/* SKILLS */}
      <motion.group 
        position={[0, 0, 2]}
        animate={{
          z: section === 1 ? (isMobile ? -1.5 : 0) : (isMobile ? -7 : -6),
          y: section === 1 ? -viewport.height : (isMobile ? -8 : 1),
          x: section === 1 ? -4 : 10,
          scaleX: Math.min(1, responsiveRatio),
          scaleY: Math.min(1, responsiveRatio),
          scaleZ: Math.min(1, responsiveRatio),
        }}
      >
        <directionalLight position={[0, 0, 2]} intensity={0.4} />
        <Float>
          <mesh scale={[2, 2, 2]} position={[3, 0, 7]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[5, 0, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"yellow"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[0, 2, 2]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};
