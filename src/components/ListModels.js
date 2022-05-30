import Product from "./Product";
import Model from "./Model";

export default function ListModels({
  models,
  changePreviewModel,
  active,
  setActive,
  setAllModels,
}) {
  return models.map(({ file_name, model_name, description, isLiked }) => {
    return (
      <Product
        key={file_name}
        isActive={file_name === active}
        setActive={setActive}
        filename={file_name}
        modelName={model_name}
        modelDesc={description}
        handleModelSelect={changePreviewModel}
        models={models}
        setAllModels={setAllModels}
        isLiked={isLiked}
        model={<Model filePath={`/models/${file_name}.glb`} />}
      />
    );
  });
}
