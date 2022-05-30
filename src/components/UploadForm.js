export default function UploadForm() {
  return (
    <div
      className="form-container"
      id="upload"
      style={{ scrollMarginTop: "40px" }}
    >
      <h3>Upload 3D files</h3>
      <form action="#">
        <ul>
          <li>
            <label>
              Product Name :
              <input type="text" id="name" name="name" required />
            </label>
          </li>
          <li>
            <label>
              Description :
              <input type="text" id="desc" name="desc" required />
            </label>
          </li>
          <li>
            <label>
              3D file:
              <input
                type="file"
                id="model"
                name="model"
                accept=".glb, .gltf, .fbx"
                required
              ></input>
            </label>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
