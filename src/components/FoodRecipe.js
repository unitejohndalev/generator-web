import React, { useState, useEffect, useRef } from "react";
import FRecipesData from "../data/FRecipesData";

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
  }

  // RANDOM IMG
 
  const [recipeImage, setRecipeImage] = useState({
    randomImage:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      foodName:"Texas Specialty"
  
    });

  const getFoodImage = () => {
      const frImage = FRecipesData.data.bbqs;
      const randomNumber = Math.floor(Math.random() * frImage.length);
      const image = frImage[randomNumber].img;
      const name = frImage[randomNumber].dsc;
      setRecipeImage((prevImg) => ( {
            ...prevImg,
            randomImage : image,
            foodName : name
      }))
      
  }

  return (
    <div className="FoodRecipe-container">
      <div ref={foodRef}>
        <button className="FoodRecipe-logo" onClick={toggle}></button>

        {show && (
          <div className="FoodRecipe--container">
            <nav className="fr-navbar" onClick={secondtoggle}>
              <h1>Food Generator</h1>
            </nav>

            {secondShow && (
              <main className="fr-container">
                <div className="fr-container">
                  <button onClick={getFoodImage}>GENERATE</button>
                  <div className="fr-img-container">
                    <img src={recipeImage.randomImage} />
                    <p>{recipeImage.foodName}</p>
                  </div>
                </div>
              </main>
            )}
            <footer className="fr-footer"></footer>
          </div>
        )}
      </div>
    </div>
  );
}
