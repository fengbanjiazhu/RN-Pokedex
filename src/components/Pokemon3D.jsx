import * as THREE from "three";
import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import charmander from "./assets/charmander/pm0004_00_00.obj";
import charmanderMtl from "./assets/charmander/pm0004_00_00.mtl";

function Pokemon3D(props) {
  const materials1 = useLoader(MTLLoader, charmanderMtl);
  const buffer = useLoader(OBJLoader, charmander, (loader) => {
    materials1.preload();
    loader.setMaterials(materials1);
  });

  // const materials = useLoader(THREE.FileLoader, charmanderMtl);
  // const buffer = useLoader(THREE.FileLoader, charmander);
  // console.log("o:" + materials);

  const objLoader = new OBJLoader();
  const obj = useMemo(() => objLoader.parse(THREE.LoaderUtils.decodeText(buffer)), [buffer]);

  // return <primitive object={obj} scale={10} />;
  return <primitive object={obj} />;
}

export default Pokemon3D;
