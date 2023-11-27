import * as THREE from "three";
import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

// import charmanderMtl from "./assets/charmander/pm0004_00_00.mtl";

function Pokemon3D(props) {
  const buffer = useLoader(THREE.FileLoader, require("./assets/charmander/pm0004_00_00.obj"));
  console.log("buffer:" + buffer);

  const objLoader = new OBJLoader();
  const obj = useMemo(() => objLoader.parse(THREE.LoaderUtils.decodeText(buffer)), [buffer]);

  return <primitive object={obj} />;
}

export default Pokemon3D;
