import React from "react";
import GoingBackPage from "./GoingBackPage";
const Css = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container p-3">
        <div className="css border border-subtle m-3 p-2">
          <p>CSS basics</p>
        </div>
        <div>
          <p>
            Learning CSS may be a daunting task. In order to help you, we have
            written numerous tutorials about CSS. Some are aimed at complete
            beginners, while others present complex features to be used by more
            experienced users.
          </p>
          <p>
            This page lists them all, with a short description. They are grouped
            by complexity so that you can choose the most appropriate for your
            level.
          </p>
        </div>
        <div>
          <h1 style={{ backgroundColor: "#7FFFD4" }}>
            Beginner-level CSS tutorials
          </h1>
        </div>
        <div>
          <p
            className="cssBasic border-bottom"
            style={{ backgroundColor: "#7FFFD4" }}
          >
            {" "}
            CSS basics
          </p>
          <p>
            This guide is aimed at complete beginners: You haven`t written one
            single line of CSS? — this is for you. It explains the fundamental
            concepts of the language and guides you in writing basic
            stylesheets.
          </p>
          <p style={{ backgroundColor: "#7FFFD4" }}>
            Using multiple backgrounds
          </p>
          <p>
            This guide is aimed at complete beginners: You haven`t written one
            single line of CSS? — this is for you. It explains the fundamental
            concepts of the language and guides you in writing basic
            stylesheets.
          </p>
          <p style={{ backgroundColor: "#7FFFD4" }}>
            Resizing background images
          </p>
          <p>
            CSS allows you to resize images used as an element`s background.
            This tutorial describes how to achieve this in a simple way.
          </p>
          <p style={{ backgroundColor: "#7FFFD4" }}>Using media queries</p>
          <p>
            The size of the screens, or the kind of devices like touchscreens or
            printed sheets vary greatly nowadays. Media queries are the
            fundamental building blocks in building websites that render
            everywhere in their best quality.
          </p>
          <p style={{ backgroundColor: "#7FFFD4" }}>
            Understanding CSS z-index
          </p>
          <p>
            Controlling superposition of boxes is a basic feature that is very
            quickly needed by Web developers. Though not that difficult, it
            requires a basic knowledge of CSS.
          </p>
        </div>
        <div>
          <h1 style={{ backgroundColor: "#FF00FF" }}>
            Intermediate-level CSS tutorials
          </h1>
          <p>
            After the release of CSS 2 (Level 1), new features have been added
            to CSS. Some of them are fancy and are pretty self-contained. They
            are easy to use for anybody with a fair knowledge of basic concepts.
          </p>
          <p style={{ backgroundColor: "#FF00FF" }}>CSS Counter Styles</p>
          <p>
            Counting items and pages is an easy task in CSS. Learn to use
            counter-reset, counter-increment, counters(), and counter().
          </p>
          <p style={{ backgroundColor: "#FF00FF" }}>CSS Animations </p>
          <p>
            CSS Animations allow you to define configurations of style, as
            keyframes, and to transition between them defining an animation.{" "}
          </p>
          <p style={{ backgroundColor: "#FF00FF" }}>CSS Transitions</p>
          <p>
            CSS Animations allow you to define configurations of style, as
            keyframes, and to transition between them defining an animation.
          </p>
          <p style={{ backgroundColor: "#FF00FF" }}>CSS Transforms</p>
          <p>
            Transforms allow you to change the position of elements by modifying
            their coordinate space: it allows for translating, rotating, and
            deforming them in the 2D or 3D spaces.
          </p>
        </div>
        <p style={{ backgroundColor: "#FF00FF" }}>CSS Gradients</p>
        <p>
          Transforms allow you to change the position of elements by modifying
          their coordinate space: it allows for translating, rotating, and
          deforming them in the 2D or 3D spaces.
        </p>
      </div>
    </>
  );
};

export default Css;
