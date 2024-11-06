import React from "react";
import Jscheatsheet from "../images/JavaScript-Cheat-Sheet-PDF.webp";
import GoingBackPage from "./GoingBackPage";

const Cheatsheet = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div>
          <img src={Jscheatsheet} alt="" />
        </div>
        <div className="table bg-secondary p-3">
          <h3>Table of Content</h3>
        </div>
        <div>
          <p>
            JavaScript is the most powerful tool for front-end development.
            Nonetheless, with continuous updates and frameworks (and NodeJS )
            added to the roster, JS can also be used for the backend.{" "}
          </p>
          <p>
            This JavaScript cheat sheet tries to cover all the basics of JS. We
            have also provided the code snippets pertaining to different JS
            concepts, which you can use if you get confused with the syntax.
            Moreover, this JavaScript cheat sheet aims to serve as the perfect
            reference for your JS learning.
          </p>
          <div>
            <h3>JavaScript Cheat Sheet</h3>
            <p>
              Let`s start this JavaScript cheat sheet with how we can include
              JavaScript in an HTML file. There are 2 ways of doing so:{" "}
            </p>
            <p>1. Internal Including of Java Script</p>
            <p>
              In this, we write the JavaScript code in the HTML pages itself
              inside the script tag.
            </p>
            <p>2. External Including of Javascript</p>
            <p>
              In this method, we create a JavaScript document with an extension
              of .js and include it in the HTML page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cheatsheet;
