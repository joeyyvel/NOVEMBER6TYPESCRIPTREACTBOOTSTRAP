import React from "react";
import "../footerPages/Reactjs.css";
import GoingBackPage from "./GoingBackPage";
const Reactjs = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div
          className="head p-3 text-center"
          style={{ backgroundColor: "#008080" }}
        >
          <h1>Getting started with React</h1>
        </div>
        <div>
          <p>
            In this article we will say hello to React. We`ll discover a little
            bit of detail about its background and use cases, set up a basic
            React toolchain on our local computer, and create and play with a
            simple starter app — learning a bit about how React works in the
            process.{" "}
          </p>
        </div>
        <div className="main-container">
          <div className="container-one">
            <div>
              <h6>Prerequisites:</h6>
            </div>
            <div>
              <p>
                Familiarity with the core HTML, CSS, and JavaScript languages,
                knowledge of the terminal/command line.
              </p>
              <p>
                React uses an HTML-in-JavaScript syntax called JSX (JavaScript
                and XML). Familiarity with both HTML and JavaScript will help
                you to learn JSX, and better identify whether bugs in your
                application are related to JavaScript or to the more specific
                domain of React.
              </p>
            </div>
          </div>
          <br />
          <div className="container-two">
            <div>
              <h6>objective:</h6>
            </div>
            <div>
              <p>
                To set up a local React development environment, create a start
                app, and understand the basics of how it works.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1>Hello React</h1>
          <p>
            As its official tagline states, React is a library for building user
            interfaces. React is not a framework – it`s not even exclusive to
            the web. It`s used with other libraries to render to certain
            environments. For instance, React Native can be used to build mobile
            applications.
          </p>
          <p>
            To build for the web, developers use React in tandem with ReactDOM.
            React and ReactDOM are often discussed in the same spaces as — and
            utilized to solve the same problems as — other true web development
            frameworks. When we refer to React as a `framework`, we`re working
            with that colloquial understanding.
          </p>
          <p>
            React`s primary goal is to minimize the bugs that occur when
            developers are building UIs. It does this through the use of
            components — self-contained, logical pieces of code that describe a
            portion of the user interface. These components can be composed
            together to create a full UI, and React abstracts away much of the
            rendering work, leaving you to concentrate on the UI design.
          </p>
        </div>
      </div>
    </>
  );
};

export default Reactjs;
