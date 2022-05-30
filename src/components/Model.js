import { Suspense, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model(props) {
  const { scene } = useLoader(GLTFLoader, props.filePath);
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  return (
    <Suspense fallback={null}>
      <primitive object={copiedScene} />
    </Suspense>
  );
}
