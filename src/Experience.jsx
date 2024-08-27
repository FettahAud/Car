import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Car } from "./Car";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function Experience() {
  // import fbx model
  // const model = useLoader(FBXLoader, "/Car_1_V003.fbx");
  // console.log(model);
  // const model = useGLTF("/Car_1_V003.glb");
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <directionalLight castShadow position={[1, 5, 3]} intensity={1.5} />
      <ambientLight intensity={4} /> */}
      <Environment preset="forest" />

      <Car position={[0, 0, 0]} />
      {/* <primitive object={model} scale={0.01} /> */}
    </>
  );
}
