import React, { useRef } from "react";
import Meme from "./components/Meme";
import Quotes from "./components/Quotes";
import FoodRecipe from "./components/FoodRecipe";
import CrudFirebase from "./components/CrudFirebase";
import memeData from "./data/memeData";
import "./style.css";

export default function App() {
  const [show, setShow] = React.useState();
  function toggle() {
    setShow((prevShow) => !prevShow);
  }
  let crudRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!crudRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });

   const [secondShow, setSecondShow] = React.useState();

   const secondtoggle = () => {
     setSecondShow((prevSecondShow) => !prevSecondShow);
   };
  const meme = memeData.map((meme) => {
    return (
      <div className="mainApp-container">
        <Meme meme={meme} />

        <Quotes />

        <FoodRecipe />
        <div className="crud-container">
          <div ref={crudRef}>
            <button className="crud-logo" onClick={toggle}></button>
           {show && <div>
            <nav className="crud-navbar" onClick={secondtoggle}>
              <h1>Firebase CRUD</h1>
            </nav>
            { secondShow &&<main>
           <CrudFirebase />

            </main>}
            <footer className="crud-footer"></footer>
            </div>}
          </div>
        </div>
      </div>
    );
  });
  return <div>{meme}</div>;
}
