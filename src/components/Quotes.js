import React, { useState, useRef, useEffect } from "react";

export default function Quotes() {
  const [show, setShow] = useState();

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  let quoteRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!quoteRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });
  const [quote, setQuote] = useState([]);

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuote(data[randomNum]);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  const [secondShow, setSecondShow] = useState()

  const secondtoggle = () => {
    setSecondShow(prevSecondShow => !prevSecondShow)
  }
  return (
    <div className="quote-container">
      <div ref={quoteRef}>
        <button className="quote-logo" onClick={toggle}>
          {/* <img src="./images/quote.png" /> */}
        </button>
        {show && (
          <div className="quote--container">
            <nav className="quote-navbar" onClick={secondtoggle}>
              <h1>Quotes Generator</h1>
            </nav>

           { secondShow && <main className="quote-main">
              <div className="quotetxt-container">
                <p>Quote: </p>
                <p>{quote.text}</p>
              </div>
              <br />
              <div className="quoteAuthor-container">
                <p>Author: </p>
                <p>{quote.author}</p>
              </div>
              <br />
              <button onClick={getQuote}>Get Quote</button>
            </main>}

            <footer className="quote-footer"></footer>
          </div>
        )}
      </div>
    </div>
  );
}
