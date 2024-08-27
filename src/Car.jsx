import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Car_1_V003.glb");
  // group.current.children[0].children[0].children[1].material.depthWrite = true;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Vehicle_1_Low" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="Engine_Parts_Low"
            castShadow
            receiveShadow
            geometry={nodes.Engine_Parts_Low.geometry}
            material={materials.Engine_Parts_lambert41}
          />
          <mesh
            name="Exterior_Low"
            castShadow
            receiveShadow
            geometry={nodes.Exterior_Low.geometry}
            // material={materials.Exterior_lambert44}
          >
            <meshStandardMaterial
              name="Exterior_lambert44"
              {...materials.Exterior_lambert44}
              depthWrite={true}
            />
          </mesh>
          <mesh
            name="Hood_Lid_Low"
            castShadow
            receiveShadow
            geometry={nodes.Hood_Lid_Low.geometry}
            material={materials.Hood_Lid_lambert42}
          />
          <mesh
            name="Interior_Low"
            castShadow
            receiveShadow
            geometry={nodes.Interior_Low.geometry}
            material={materials.Interior_lambert43}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Car_1_V003.glb");
