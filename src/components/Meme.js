import React, { useState, useEffect, useRef } from "react";

export default function Meme(props) {
  //   BELOW ARE THE LINK FOR IMAGES
  //   "http://i.imgflip.com/1bij.jpg";
  //   "https://api.imgflip.com/get_memes";

  //   CREATE USETATE FOR RANDOM IMAGES
  const memeInfo = {
    topTxt: "",
    bottomTxt: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  };
  const [meme, setMeme] = useState(memeInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  //   CREATE RANDOM FUNCTION FOR IMAGES
  function memerandom() {
    const random = Math.floor(Math.random() * allMemeImg.length);
    const url = allMemeImg[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  const [allMemeImg, setAllMemeImg] = useState([]);
  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImg(data.data.memes);
    }
    getMeme();
  }, []);

  const [show, setShow] = useState();

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };
  let memeRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!memeRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });
  const [secondShow, setSecondShow] = useState();

  const secondtoggle = () => {
    setSecondShow((prevSecondShow) => !prevSecondShow);
  };

  return (
    <div className="meme-container">
      <div ref={memeRef} className="meme---container">
        <button className="img--container" onClick={toggle}>
          {/* <img src={props.meme.imgSrc} /> */}
        </button>
        <div className="wrapper-container">
          {show && (
            <div className="meme--container">
              <nav onClick={secondtoggle}>
                <h1>{props.meme.title}</h1>
              </nav>
              {secondShow && (
                <main>
                  <div className="main-container">
                    <input
                      type="text"
                      placeholder={props.meme.input.topText}
                      name="topTxt"
                      value={meme.topTxt}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder={props.meme.input.bottomText}
                      name="bottomTxt"
                      value={meme.bottomTxt}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="btn-container">
                    <button onClick={memerandom}>{props.meme.imgbtn}</button>
                  </div>
                  <div className="img-container">
                    <div className="memetxt-container">
                      <h2>{meme.topTxt}</h2>
                      <h2>{meme.bottomTxt}</h2>
                    </div>
                    <img src={meme.randomImg} />
                  </div>
                </main>
              )}
              <footer className="meme-footer"></footer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
