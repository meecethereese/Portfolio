import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useGLTF, useTexture, useAnimations, useVideoTexture } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export function Office(props) {
    const isMobile = window.innerWidth < 768;
    const group = useRef();
    const { section } = props;
    const { nodes, materials, animations } = useGLTF("models/scene.gltf");
    const { actions } = useAnimations(animations, group);
    var textureMaterial;

    if (!isMobile)
    {
        const coffeePlantTexture = useTexture("textures/coffeePlantBaked.jpg");
        coffeePlantTexture.flipY = false;
        const rugTexture = useTexture("textures/rugBaked.jpg");
        rugTexture.flipY = false;
        const planeTexture = useTexture("textures/planeBaked.jpg");
        planeTexture.flipY = false;
        textureMaterial = {
            coffeePlant: new THREE.MeshStandardMaterial({
                map: coffeePlantTexture,
                transparent: true,
                opacity: 1,
            }),
            plane: new THREE.MeshStandardMaterial({
                map: planeTexture,
                transparent: true,
                opacity: 1,
            }),
            rug: new THREE.MeshStandardMaterial({
                map: rugTexture,
                transparent: true,
                opacity: 1,
            }),
        };
    }

    const textureVSCode = useVideoTexture("textures/Portfolio Video.mp4");
    const keybrdCompMseTexture = useTexture("textures/keybrdCompMseBaked.jpg");
    keybrdCompMseTexture.flipY = false;
    const monitorTexture = useTexture("textures/monitorBaked.jpg");
    monitorTexture.flipY = false;
    const computerTexture = useTexture("textures/computerBaked.jpg");
    computerTexture.flipY = false;

    const mobileTextures = {
        computer: new THREE.MeshStandardMaterial({
            map: computerTexture,
            transparent: true,
            opacity: 1,
        }),
        keybrdCompMse: new THREE.MeshStandardMaterial({
            map: keybrdCompMseTexture,
            transparent: true,
            opacity: 1,
        }),
        monitor: new THREE.MeshStandardMaterial({
            map: monitorTexture,
            transparent: true,
            opacity: 1,
        }),
    };

    // const textureOpacity = useMotionValue(0);

    // useEffect(() => {
    //     animate(textureOpacity, section === 0 ? 1 : 0, {
    //         duration: 0.8,
    //     });
    // }, [section]);

    // useFrame(() => {
    //     const matOpacity = textureOpacity.get();
    //     textureMaterial.coffeePlant.opacity = matOpacity;
    //     textureMaterial.computer.opacity = matOpacity;
    //     textureMaterial.plane.opacity = matOpacity;
    //     textureMaterial.keybrdCompMse.opacity = matOpacity;
    //     textureMaterial.monitor.opacity = matOpacity;
    //     textureMaterial.rug.opacity = matOpacity;
    // });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                {!isMobile && (
                    <>
                        <group name="Plane">
                            <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.Default} />
                            <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={textureMaterial.plane} />
                            <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={textureMaterial.plane} />
                        </group>
                        <motion.group 
                            name="Ferrari" 
                            position={[1.792, 2.084, 1.336]} 
                            rotation={[-Math.PI, 1.432, -Math.PI]} 
                            scale={0.671}
                            // animate={{
                            //     scale: section === 0 ? 0.671 : 0
                            // }}
                        >
                            <mesh name="mesh1129829827" geometry={nodes.mesh1129829827.geometry} material={materials['mat23.002']} />
                            <mesh name="mesh1129829827_1" geometry={nodes.mesh1129829827_1.geometry} material={materials['mat8.001']} />
                            <mesh name="mesh1129829827_2" geometry={nodes.mesh1129829827_2.geometry} material={materials.mat16} />
                            <mesh name="mesh1129829827_3" geometry={nodes.mesh1129829827_3.geometry} material={materials['mat17.001']} />
                            <mesh name="mesh1129829827_4" geometry={nodes.mesh1129829827_4.geometry} material={materials['mat15.001']} />
                        </motion.group>
                        <motion.group 
                            name="Chessboard" 
                            position={[0.809, 0.967, 1.955]} 
                            rotation={[0, 0.541, 0]} 
                            scale={0.006}
                            // animate={{
                            //     scale: section === 0 ? 0.006 : 0
                            // }}
                        >
                            <mesh name="chesspiece_king_Cylinder012-Mesh" geometry={nodes['chesspiece_king_Cylinder012-Mesh'].geometry} material={materials.Black_Piece} />
                            <mesh name="chesspiece_king_Cylinder012-Mesh_1" geometry={nodes['chesspiece_king_Cylinder012-Mesh_1'].geometry} material={materials.Chessboard_Surround} />
                            <mesh name="chesspiece_king_Cylinder012-Mesh_2" geometry={nodes['chesspiece_king_Cylinder012-Mesh_2'].geometry} material={materials.white_tile} />
                            <mesh name="chesspiece_king_Cylinder012-Mesh_3" geometry={nodes['chesspiece_king_Cylinder012-Mesh_3'].geometry} material={materials.black_tile} />
                            <mesh name="chesspiece_king_Cylinder012-Mesh_4" geometry={nodes['chesspiece_king_Cylinder012-Mesh_4'].geometry} material={materials.White_Piece} />
                        </motion.group>
                        <motion.group 
                            name="Bookcase" 
                            position={[1.742, 0.52, -1.343]} 
                            rotation={[-Math.PI, 1.562, -Math.PI]}
                            // animate={{
                            //     scale: section === 0 ? 1 : 0
                            // }}
                        >
                            <mesh name="mesh187267960" geometry={nodes.mesh187267960.geometry} material={materials.mat20} />
                            <mesh name="mesh187267960_1" geometry={nodes.mesh187267960_1.geometry} material={materials.mat17} />
                            <mesh name="mesh187267960_2" geometry={nodes.mesh187267960_2.geometry} material={materials.mat5} />
                            <mesh name="mesh187267960_3" geometry={nodes.mesh187267960_3.geometry} material={materials.mat21} />
                            <mesh name="mesh187267960_4" geometry={nodes.mesh187267960_4.geometry} material={materials.mat11} />
                            <mesh name="mesh187267960_5" geometry={nodes.mesh187267960_5.geometry} material={materials.mat9} />
                            <mesh name="mesh187267960_6" geometry={nodes.mesh187267960_6.geometry} material={materials.mat4} />
                            <mesh name="mesh187267960_7" geometry={nodes.mesh187267960_7.geometry} material={materials.mat8} />
                            <mesh name="mesh187267960_8" geometry={nodes.mesh187267960_8.geometry} material={materials.mat13} />
                            <mesh name="mesh187267960_9" geometry={nodes.mesh187267960_9.geometry} material={materials.mat3} />
                            <mesh name="mesh187267960_10" geometry={nodes.mesh187267960_10.geometry} material={materials.mat7} />
                            <mesh name="mesh187267960_11" geometry={nodes.mesh187267960_11.geometry} material={materials.mat6} />
                            <mesh name="mesh187267960_12" geometry={nodes.mesh187267960_12.geometry} material={materials.mat23} />
                            <mesh name="mesh187267960_13" geometry={nodes.mesh187267960_13.geometry} material={materials.mat22} />
                            <mesh name="mesh187267960_14" geometry={nodes.mesh187267960_14.geometry} material={materials.mat18} />
                            <mesh name="mesh187267960_15" geometry={nodes.mesh187267960_15.geometry} material={materials.mat19} />
                        </motion.group>
                        <motion.group 
                            name="Legos" 
                            position={[1.776, 2.075, 0.813]} 
                            scale={0.708}
                            // animate={{
                            //     scale: section === 0 ? 0.708 : 0
                            // }}
                        >
                            <mesh name="mesh2038704105" geometry={nodes.mesh2038704105.geometry} material={materials['mat8.002']} />
                            <mesh name="mesh2038704105_1" geometry={nodes.mesh2038704105_1.geometry} material={materials['mat5.001']} />
                        </motion.group>
                        <motion.group 
                            name="Lightsaber" 
                            position={[1.685, 2.058, 1.89]} 
                            rotation={[0.026, 0.486, 3.124]} 
                            scale={0.205}
                            // animate={{
                            //     scale: section === 0 ? 0.205 : 0
                            // }}
                        >
                            <mesh name="mesh688460878" geometry={nodes.mesh688460878.geometry} material={materials['mat18.001']} />
                            <mesh name="mesh688460878_1" geometry={nodes.mesh688460878_1.geometry} material={materials.mat15} />
                            <mesh name="mesh688460878_2" geometry={nodes.mesh688460878_2.geometry} material={materials['mat23.001']} />
                            <mesh name="mesh688460878_3" geometry={nodes.mesh688460878_3.geometry} material={materials['mat19.001']} />
                            <mesh name="mesh688460878_4" geometry={nodes.mesh688460878_4.geometry} material={materials['mat13.001']} />
                            <mesh name="mesh688460878_5" geometry={nodes.mesh688460878_5.geometry} material={materials['mat22.001']} />
                            <mesh name="mesh688460878_6" geometry={nodes.mesh688460878_6.geometry} material={materials.mat12} />
                        </motion.group>
                        <motion.group 
                            name="Shelf" 
                            position={[1.837, 2.015, 1.321]} 
                            rotation={[0, -1.571, 0]} 
                            scale={0.412}
                            // animate={{
                            //     scale: section === 0 ? 0.412 : 0
                            // }}    
                        >
                            <mesh name="Shelf_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={materials.lambert2SG} />
                            <mesh name="Shelf_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={materials['lambert3SG.001']} />
                        </motion.group>
                        
                        <motion.mesh 
                            name="CoffeePlant" 
                            geometry={nodes.CoffeePlant.geometry} 
                            material={textureMaterial.coffeePlant} 
                            position={[-1.436, 0, -1.879]} rotation={[Math.PI, -0.014, Math.PI]} 
                            scale={0.212} 
                            // animate={{
                            //     scale: section === 0 ? 0.212 : 0
                            // }}
                        />
                        <motion.mesh 
                            name="Rug" 
                            geometry={nodes.Rug.geometry} 
                            material={textureMaterial.rug} 
                            position={[-0.952, 0, 1.248]} 
                            rotation={[Math.PI, -1.564, Math.PI]} 
                            // animate={{
                            //     scale: section === 0 ? 1 : 0
                            // }}
                        />
                    </>
                )}

                <motion.group
                    name="Desk"
                    position={[1.503, 0, 1.292]}
                    rotation={[-Math.PI, 0.021, -Math.PI]}
                    // animate={{
                    //     scale: section === 0 ? 1 : 0
                    // }}
                >
                    <mesh name="Cube007_Cube008_GrayPlastic" geometry={nodes.Cube007_Cube008_GrayPlastic.geometry} material={materials.GrayPlastic} />
                    <mesh name="Cube007_Cube008_GrayPlastic_1" geometry={nodes.Cube007_Cube008_GrayPlastic_1.geometry} material={materials.BlackCoatSteel} />
                    <mesh name="Cube007_Cube008_GrayPlastic_2" geometry={nodes.Cube007_Cube008_GrayPlastic_2.geometry} material={materials.WhiteSteelScrew} />
                    <mesh name="Cube007_Cube008_GrayPlastic_3" geometry={nodes.Cube007_Cube008_GrayPlastic_3.geometry} material={materials.BlackPlastic} />
                    <mesh name="Cube007_Cube008_GrayPlastic_4" geometry={nodes.Cube007_Cube008_GrayPlastic_4.geometry} material={materials.BlackWood} />
                </motion.group>
                <motion.group
                    name="Chair"
                    position={[7.601, 0, 11.72]}
                    rotation={[-Math.PI, 1.547, -Math.PI]}
                    scale={0.032}
                    // animate={{
                    //     scale: section === 0 ? 0.032 : 0
                    // }}    
                >
                    <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.Office_Cha} />
                    <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials.Office_Cha_1} />
                    <mesh name="Node-Mesh_2" geometry={nodes['Node-Mesh_2'].geometry} material={materials.Office_Cha_2} />
                </motion.group>
                <motion.mesh 
                    name="Monitor" 
                    geometry={nodes.Monitor.geometry} 
                    material={mobileTextures.monitor} 
                    position={[1.583, 0.947, 1.07]} 
                    rotation={[Math.PI, -1.555, Math.PI]} 
                    scale={0.002} 
                    // animate={{
                    //     scale: section === 0 ? 0.002 : 0
                    // }}
                />
                <motion.mesh
                    name="Keybrd_Mse"
                    geometry={nodes.Keybrd_Mse.geometry}
                    material={mobileTextures.keybrdCompMse}
                    position={[1.841, 0.941, 0.7]}
                    rotation={[Math.PI, -1.564, Math.PI]}
                    scale={0.002}
                    // animate={{
                    //     scale: section === 0 ? 0.002 : 0
                    // }}
                />
                <mesh 
                    name="Screen" 
                    geometry={nodes.Screen.geometry}  
                    position={[1.583, 0.947+0.335, 1.07+0.63]} 
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.0012, 0.0037, 0.002]} 
                >
                    <meshBasicMaterial map={textureVSCode} toneMapped={false} />
                </mesh>
                <motion.group 
                    name="PC" 
                    position={[1.406, 0.944, 1.362]} 
                    rotation={[0, -1.558, 0]} 
                    scale={0.002}
                    // animate={{
                    //     scale: section === 0 ? 0.002 : 0
                    // }}
                >
                    <mesh name="System_unit_1002" geometry={nodes.System_unit_1002.geometry} material={mobileTextures.computer} />
                    <mesh name="System_unit_1002_1" geometry={nodes.System_unit_1002_1.geometry} material={mobileTextures.computer} />
                </motion.group>
            </group>
        </group>
    )
}

useGLTF.preload("models/scene.gltf");
useTexture.preload("textures/coffeePlantBaked.jpg");
useTexture.preload("textures/computerBaked.jpg");
useTexture.preload("textures/keybrdCompMseBaked.jpg");
useTexture.preload("textures/monitorBaked.jpg");
useTexture.preload("textures/planeBaked.jpg");
useTexture.preload("textures/rugBaked.jpg");