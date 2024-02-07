import { Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Car } from "./Car";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <directionalLight castShadow position={[1, 5, 3]} intensity={1.5} />
      <ambientLight intensity={4} /> */}
      <Environment preset="city" />

      <Car />
    </>
  );
}
