import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF("./Car_1_V001.glb");
  return (
    <group {...props} dispose={null} scale={0.02}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.v1_0_1.geometry}
          material={materials.Interior_lambert43}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.v1_0_2.geometry}
          material={materials.Engine_Parts_lambert41}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.v1_0_3.geometry}
          material={materials.Exterior_lambert44}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.v1_0_4.geometry}
          material={materials.Hood_Lid_lambert42}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Car_1_V001.glb");
