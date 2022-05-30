import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FaHeart } from "react-icons/fa";
import Model from "./Model";

export default function LikedModels(props) {
  return props.models.map(({ file_name, model_name, description, isLiked }) => {
    return (
      isLiked && (
        <div key={file_name} className={"product"}>
          <div className="product-model">
            <Canvas
              className="canvas"
              camera={{ fov: 10, near: 0.1, far: 1000, position: [0, 0, 3] }}
            >
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={2.5} />
              <spotLight intensity={1} position={[10, 15, 10]} angle={0.3} />
              {<Model filePath={`/models/${file_name}.glb`} />}
            </Canvas>
          </div>
          <div className="product-info">
            <p>{model_name}</p>
            <button
              className="like-btn"
              onClick={() => {
                props.sendUnLikedDetails(file_name, model_name);
              }}
            >
              <FaHeart className={"icon fillLike"} />
            </button>
          </div>
        </div>
      )
    );
  });
}
