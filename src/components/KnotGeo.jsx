import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function KnotGeo(props) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += delta));

  return (
    <mesh ref={mesh} {...props}>
      <torusKnotGeometry radius={10} args={[10, 1, 260, 6, 10, 16]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

export default KnotGeo;
