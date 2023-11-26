import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import KnotGeo from "./KnotGeo";
import Pokemon3D from "./Pokemon3D";

function ThreeDCanvas() {
  return (
    <Canvas style={{ width: 400, height: 400 }}>
      <ambientLight />
      <pointLight position={[1, 0, 1]} intensity={1} color="#fff" distance={100} />

      <mesh position={[0, 1.5, 0]}>
        <coneGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      {/* <KnotGeo scale={0.05} position={[0, -1, 0]} /> */}
      <Suspense fallback={null}>
        <Pokemon3D />
      </Suspense>
    </Canvas>
  );
}

export default ThreeDCanvas;
