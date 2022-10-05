import React, { useState, useEffect, useRef } from "react";


export default function FoodRecipe() {
  const [show, setShow] = useState();
  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  let foodRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!foodRef.current.contains(e.target)) {
        setShow(false);
      }
 
    });
  });



  const [secondShow, setSecondShow] = useState();

  function secondtoggle() {
    setSecondShow((prevSecondShow) => !prevSecondShow);
  };



  return (
    <div className="FoodRecipe-container">
      <div ref={foodRef}>
        <button className="FoodRecipe-logo" onClick={toggle}>
       
        </button>

        {show && (
          <div className="FoodRecipe--container" >
            <nav className="fr-navbar" onClick={secondtoggle}>
              <h1>Food Recipes Generator</h1>
            </nav>

            {secondShow && <main className="fr-container">
              <div className="fr-container">
              <button>GENERATE</button>
                <div className= 'fr-img-container'>

                </div>
              </div>
            </main>}
            <footer className="fr-footer"></footer>
          </div>
        )}
      </div>
    </div>
  );
}
