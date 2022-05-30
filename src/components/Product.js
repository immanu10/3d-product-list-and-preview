import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Product(props) {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    props.handleModelSelect(props.filename, props.modelName, props.modelDesc);
    props.setActive(props.filename);
  };
  const handleLike = () => {
    if (!like) {
      const likefilename = props.filename;
      const newModelData = props.models.map((m) => ({
        ...m,
        isLiked: likefilename === m.file_name ? !m.isLiked : m.isLiked,
      }));
      props.setAllModels(newModelData);
    } else {
      const unlikefilename = props.filename;
      const newModelData = props.models.map((m) => ({
        ...m,
        isLiked: unlikefilename === m.file_name ? !m.isLiked : m.isLiked,
      }));
      props.setAllModels(newModelData);
    }
    setLike(!like);
  };

  return (
    <div
      className={`product ${props.isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="product-model">
        <Canvas
          className="canvas"
          camera={{ fov: 10, near: 0.1, far: 1000, position: [0, 0, 3] }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={2.5} />
          <spotLight intensity={1} position={[10, 15, 10]} angle={0.3} />
          {props.model}
        </Canvas>
      </div>
      <div className="product-info">
        <p>{props.modelName}</p>
        <button className="like-btn" onClick={handleLike}>
          <FaHeart className={`icon ${props.isLiked ? "fillLike" : ""}`} />
        </button>
      </div>
    </div>
  );
}
