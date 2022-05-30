import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ModelDisplay(props) {
  return (
    <>
      <div className="previewmodel">
        <Canvas
          className="canvas"
          camera={{ fov: 10, near: 0.1, far: 1000, position: [0, 0, 3] }}
        >
          <OrbitControls />
          <ambientLight intensity={2.5} />
          <spotLight intensity={1} position={[10, 15, 10]} angle={0.3} />
          {props.model}
        </Canvas>
      </div>
    </>
  );
}
