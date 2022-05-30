import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
    boxRef.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#f2f2f2" />
      <RoundedBox args={[3, 3, 0.3]} radius={0.1}>
        <meshLambertMaterial attach="material" color="#ea3b76" />
      </RoundedBox>
    </mesh>
  );
};

export default function HeroModel() {
  return (
    <Canvas>
      <pointLight position={[5, 5, 5]} />
      <ambientLight intensity={0.1} />
      <directionalLight color="#EA3B76" position={[0, 0, 5]} />
      <Box />
    </Canvas>
  );
}
