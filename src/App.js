import { useState } from "react";
import "./App.css";
import Model from "./components/Model";
import ModelDisplay from "./components/ModelDisplay";
import { modelDetails } from "./data/modelDetails";
import { BiSearch } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import HeroModel from "./components/HeroModel";
import Footer from "./components/Footer";
import ListModels from "./components/ListModels";
import LikedModels from "./components/LikedModels";
import UploadForm from "./components/UploadForm";

function App() {
  const [previewFile, setPreviewFile] = useState("P1");
  const [productName, setProductName] = useState("Cheerios");
  const [productDesc, setProductDesc] = useState(
    "Toasted Whole Grain Oat cereal"
  );
  const [active, setActive] = useState("P1");
  const [searchTxt, setSearchTxt] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [allModels, setAllModels] = useState(modelDetails);

  function changePreviewModel(filename, modelName, modelDesc) {
    setPreviewFile(filename);
    setProductName(modelName);
    setProductDesc(modelDesc);
  }

  function sendUnLikedDetails(file_name, model_name) {
    const newModelData = allModels.map((m) => ({
      ...m,
      isLiked: file_name === m.file_name ? !m.isLiked : m.isLiked,
    }));
    setAllModels(newModelData);
  }
  const filterModels =
    allModels && searchTxt
      ? allModels.filter((model) => {
          return model.model_name
            .toLowerCase()
            .includes(searchTxt.toLocaleLowerCase());
        })
      : [];

  function handleNavClick(e) {
    const tab = e.target.dataset.tab;
    setActiveTab(tab);
  }

  function isLikedListEmpty() {
    let isEmpty = true;
    for (let model of allModels) {
      if (model.isLiked) {
        isEmpty = false;
        break;
      }
    }
    return isEmpty;
  }

  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-txts">
          <h1>Experience Our high quality 3D Models of Retail Products</h1>
          <p>Find out what's in the store for you...</p>
          <a className="cta" href="#navbar">
            Explore
          </a>
        </div>
        <div className="hero-model">
          <HeroModel />
        </div>
      </div>
      <div
        className="nav-bar"
        id="navbar"
        style={{ scrollMarginTop: "40px" }}
        onClick={handleNavClick}
      >
        <button
          data-tab="all"
          style={
            activeTab === "all"
              ? { backgroundColor: "#e77198", color: "#fff" }
              : {}
          }
        >
          All Products
        </button>
        <button
          data-tab="liked"
          style={
            activeTab === "liked"
              ? { backgroundColor: "#e77198", color: "#fff" }
              : {}
          }
        >
          Liked
        </button>
      </div>
      {activeTab === "all" ? (
        <div id="content">
          <h2 style={{ color: "#5f6368", marginLeft: "25px", padding: "12px" }}>
            Explore All Products
          </h2>
          <div className="utilities">
            <div className="input-box">
              <BiSearch
                style={{ color: "#f287ab", width: "22px", height: "22px" }}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
              />
            </div>
            <a href="#upload">
              <button title="Upload 3d model">Upload</button>
            </a>
          </div>
          <div className="content-container">
            <div className="allModel-container">
              {searchTxt ? (
                <ListModels
                  models={filterModels}
                  changePreviewModel={changePreviewModel}
                  active={active}
                  setActive={setActive}
                  setAllModels={setAllModels}
                />
              ) : (
                <ListModels
                  models={allModels}
                  changePreviewModel={changePreviewModel}
                  active={active}
                  setActive={setActive}
                  setAllModels={setAllModels}
                />
              )}
            </div>
            <div className="preview-container">
              {
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ModelDisplay
                    model={<Model filePath={`/models/${previewFile}.glb`} />}
                  />
                  <div className="preview-content">
                    <h2>{productName}</h2>
                    <p>{productDesc}</p>
                  </div>
                  <div className="preview-txt-div">
                    <h4 style={{ marginLeft: "20px" }}>Preview window</h4>
                    <BsArrowsMove
                      style={{
                        width: "26px",
                        height: "26px",
                        marginLeft: "120px",
                      }}
                    />
                    <p style={{ marginLeft: "6px" }}>
                      move around to view 360&deg;
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      ) : (
        <div id="content">
          <h2 style={{ color: "#5f6368", marginLeft: "25px", padding: "12px" }}>
            Liked Products
          </h2>
          {isLikedListEmpty() ? (
            <div
              className="allModel-container"
              style={{ width: "90%", margin: "0 auto" }}
            >
              <h4 style={{ margin: "0 auto" }}>
                This Looks empty. No Fav❤️ item found
              </h4>
            </div>
          ) : (
            <div
              className="allModel-container"
              style={{ width: "90%", margin: "0 auto" }}
            >
              <LikedModels
                models={allModels}
                sendUnLikedDetails={sendUnLikedDetails}
              />
            </div>
          )}
        </div>
      )}
      <UploadForm />
      <Footer />
    </div>
  );
}

export default App;
