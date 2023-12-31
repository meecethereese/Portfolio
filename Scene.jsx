/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public\models\scene.gltf -k 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterSpot" position={[0.48, 0.058, 1.12]} rotation={[-Math.PI, 1.542, -Math.PI]} scale={1.228}>
          <group name="Armature">
            <primitive object={nodes.Hips} />
          </group>
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} />
        </group>
        <group name="Plane">
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.Default} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['Material.003']} />
          <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials['Material.005']} />
        </group>
        <group name="Ferrari" position={[1.792, 2.084, 1.336]} rotation={[-Math.PI, 1.432, -Math.PI]} scale={0.671}>
          <mesh name="mesh1129829827" geometry={nodes.mesh1129829827.geometry} material={materials['mat23.002']} />
          <mesh name="mesh1129829827_1" geometry={nodes.mesh1129829827_1.geometry} material={materials['mat8.001']} />
          <mesh name="mesh1129829827_2" geometry={nodes.mesh1129829827_2.geometry} material={materials.mat16} />
          <mesh name="mesh1129829827_3" geometry={nodes.mesh1129829827_3.geometry} material={materials['mat17.001']} />
          <mesh name="mesh1129829827_4" geometry={nodes.mesh1129829827_4.geometry} material={materials['mat15.001']} />
        </group>
        <group name="Chessboard" position={[0.809, 0.967, 1.955]} rotation={[0, 0.541, 0]} scale={0.006}>
          <mesh name="chesspiece_king_Cylinder012-Mesh" geometry={nodes['chesspiece_king_Cylinder012-Mesh'].geometry} material={materials.Black_Piece} />
          <mesh name="chesspiece_king_Cylinder012-Mesh_1" geometry={nodes['chesspiece_king_Cylinder012-Mesh_1'].geometry} material={materials.Chessboard_Surround} />
          <mesh name="chesspiece_king_Cylinder012-Mesh_2" geometry={nodes['chesspiece_king_Cylinder012-Mesh_2'].geometry} material={materials.white_tile} />
          <mesh name="chesspiece_king_Cylinder012-Mesh_3" geometry={nodes['chesspiece_king_Cylinder012-Mesh_3'].geometry} material={materials.black_tile} />
          <mesh name="chesspiece_king_Cylinder012-Mesh_4" geometry={nodes['chesspiece_king_Cylinder012-Mesh_4'].geometry} material={materials.White_Piece} />
        </group>
        <group name="Bookcase" position={[1.742, 0.52, -1.343]} rotation={[-Math.PI, 1.562, -Math.PI]}>
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
        </group>
        <group name="Desk" position={[1.503, 0, 1.292]} rotation={[-Math.PI, 0.021, -Math.PI]}>
          <mesh name="Cube007_Cube008_GrayPlastic" geometry={nodes.Cube007_Cube008_GrayPlastic.geometry} material={materials.GrayPlastic} />
          <mesh name="Cube007_Cube008_GrayPlastic_1" geometry={nodes.Cube007_Cube008_GrayPlastic_1.geometry} material={materials.BlackCoatSteel} />
          <mesh name="Cube007_Cube008_GrayPlastic_2" geometry={nodes.Cube007_Cube008_GrayPlastic_2.geometry} material={materials.WhiteSteelScrew} />
          <mesh name="Cube007_Cube008_GrayPlastic_3" geometry={nodes.Cube007_Cube008_GrayPlastic_3.geometry} material={materials.BlackPlastic} />
          <mesh name="Cube007_Cube008_GrayPlastic_4" geometry={nodes.Cube007_Cube008_GrayPlastic_4.geometry} material={materials.BlackWood} />
        </group>
        <group name="Legos" position={[1.776, 2.075, 0.813]} scale={0.708}>
          <mesh name="mesh2038704105" geometry={nodes.mesh2038704105.geometry} material={materials['mat8.002']} />
          <mesh name="mesh2038704105_1" geometry={nodes.mesh2038704105_1.geometry} material={materials['mat5.001']} />
        </group>
        <group name="Lightsaber" position={[1.685, 2.058, 1.89]} rotation={[0.026, 0.486, 3.124]} scale={0.205}>
          <mesh name="mesh688460878" geometry={nodes.mesh688460878.geometry} material={materials['mat18.001']} />
          <mesh name="mesh688460878_1" geometry={nodes.mesh688460878_1.geometry} material={materials.mat15} />
          <mesh name="mesh688460878_2" geometry={nodes.mesh688460878_2.geometry} material={materials['mat23.001']} />
          <mesh name="mesh688460878_3" geometry={nodes.mesh688460878_3.geometry} material={materials['mat19.001']} />
          <mesh name="mesh688460878_4" geometry={nodes.mesh688460878_4.geometry} material={materials['mat13.001']} />
          <mesh name="mesh688460878_5" geometry={nodes.mesh688460878_5.geometry} material={materials['mat22.001']} />
          <mesh name="mesh688460878_6" geometry={nodes.mesh688460878_6.geometry} material={materials.mat12} />
        </group>
        <group name="Chair" position={[7.601, 0, 11.61]} rotation={[-Math.PI, 1.547, -Math.PI]} scale={0.032}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.Office_Cha} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials.Office_Cha_1} />
          <mesh name="Node-Mesh_2" geometry={nodes['Node-Mesh_2'].geometry} material={materials.Office_Cha_2} />
        </group>
        <group name="Shelf" position={[1.837, 2.015, 1.321]} rotation={[0, -1.571, 0]} scale={0.412}>
          <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={materials.lambert2SG} />
          <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={materials['lambert3SG.001']} />
        </group>
        <mesh name="Keybrd_Mse" geometry={nodes.Keybrd_Mse.geometry} material={materials['lambert3SG.002']} position={[1.841, 0.941, 0.619]} rotation={[Math.PI, -1.564, Math.PI]} scale={0.002} />
        <mesh name="CoffeePlant" geometry={nodes.CoffeePlant.geometry} material={materials['CoffeePlant_mat.001']} position={[-1.436, 0, -1.879]} rotation={[Math.PI, -0.014, Math.PI]} scale={0.212} />
        <mesh name="Rug" geometry={nodes.Rug.geometry} material={materials.phong1SG} position={[-0.952, 0, 1.248]} rotation={[Math.PI, -1.564, Math.PI]} />
        <mesh name="Monitor" geometry={nodes.Monitor.geometry} material={materials['lambert3SG.003']} position={[1.583, 0.947, 1.07]} rotation={[Math.PI, -1.555, Math.PI]} scale={0.002} />
        <group name="PC" position={[1.406, 0.944, 1.362]} rotation={[0, -1.558, 0]} scale={0.002}>
          <mesh name="System_unit_1002" geometry={nodes.System_unit_1002.geometry} material={materials['lambert3SG.003']} />
          <mesh name="System_unit_1002_1" geometry={nodes.System_unit_1002_1.geometry} material={materials['initialShadingGroup.002']} />
        </group>
        <mesh name="Screen" geometry={nodes.Screen.geometry} material={materials['Material.006']} position={[1.583, 0.947, 1.07]} rotation={[Math.PI, -1.555, Math.PI]} scale={0.002} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
