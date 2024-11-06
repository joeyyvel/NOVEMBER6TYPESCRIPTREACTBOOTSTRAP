import React from "react";
import GoingBackPage from "./GoingBackPage";
const Sass = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div
          className="head-container"
          style={{
            height: "200px",
            backgroundColor: "#DCDCDC",
          }}
        >
          <div>
            <p
              className="vertical-center"
              style={{
                fontSize: "50px",
                fontWeight: "500",
                textAlign: "center",
                paddingTop: "40px",
                color: "#7F7F7F",
              }}
            >
              Sass Basics
            </p>
          </div>
        </div>
        <div className="head mt-5">
          <p>
            Before you can use Sass, you need to set it up on your project. If
            you want to just browse here, go ahead, but we recommend you go
            install Sass first. Go here if you want to learn how to get
            everything set up.
          </p>
        </div>
        <div>
          <h4>Preprocessing</h4>
        </div>
        <div>
          <p>
            CSS on its own can be fun, but stylesheets are getting larger, more
            complex, and harder to maintain. This is where a preprocessor can
            help. Sass has features that don’t exist in CSS yet like nesting,
            mixins, inheritance, and other nifty goodies that help you write
            robust, maintainable CSS.
          </p>
          <p>
            Once you start tinkering with Sass, it will take your preprocessed
            Sass file and save it as a normal CSS file that you can use in your
            website.
          </p>
          <p>
            The most direct way to make this happen is in your terminal. Once
            Sass is installed, you can compile your Sass to CSS using the sass
            command. You’ll need to tell Sass which file to build from, and
            where to output CSS to. For example, running sass input.scss
            output.css from your terminal would take a single Sass file,
            input.scss, and compile that file to output.css.
          </p>
          <p>
            You can also watch individual files or directories with the --watch
            flag. The watch flag tells Sass to watch your source files for
            changes, and re-compile CSS each time you save your Sass. If you
            wanted to watch (instead of manually build) your input.scss file,
            you’d just add the watch flag to your command, like so:
          </p>
        </div>
      </div>
    </>
  );
};

export default Sass;
