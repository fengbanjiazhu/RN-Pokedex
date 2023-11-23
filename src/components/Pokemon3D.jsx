import React, { Suspense, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function Pokemon3D(props) {
  const obj = useLoader(OBJLoader, "./assets/charmander/pm0004_00_00.obj");

  return (
    <mesh {...props}>
      <primitive object={obj} />
    </mesh>
  );
}

export default Pokemon3D;
