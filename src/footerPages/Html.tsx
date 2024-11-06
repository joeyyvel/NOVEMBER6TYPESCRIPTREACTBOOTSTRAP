import React from "react";
import GoingBackPage from "./GoingBackPage";

const Html = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container p-3">
        <div className="border border-subtle m-3 p-2">
          <h3>HTML basics</h3>
        </div>
        <p>
          HTML (HyperText Markup Language) is the code that is used to structure
          a web page and its content. For example, content could be structured
          within a set of paragraphs, a list of bulleted points, or using images
          and data tables. As the title suggests, this article will give you a
          basic understanding of HTML and its functions.
        </p>

        <div>
          <h3>So what is HTML?</h3>
          <p>
            HTML is a markup language that defines the structure of your
            content. HTML consists of a series of elements, which you use to
            enclose, or wrap, different parts of the content to make it appear a
            certain way, or act a certain way. The enclosing tags can make a
            word or image hyperlink to somewhere else, can italicize words, can
            make the font bigger or smaller, and so on. For example, take the
            following line of content:
          </p>
        </div>
        <div
          className="catSample border border-secondary-subtle p-3"
          style={{ backgroundColor: "#F0FFF0" }}
        >
          <p className="cat ">My cat is very grumpy</p>
        </div>
        <div>
          <p>
            If we wanted the line to stand by itself, we could specify that it
            is a paragraph by enclosing it in paragraph tags:
          </p>
        </div>
        <div>
          <p
            className="html border-bottom"
            style={{ backgroundColor: "#F0FFF0" }}
          >
            HTML
          </p>
          <div className="catWord p-3" style={{ background: "#DCDCDC" }}>
            p My cat is very grumpy /p
          </div>
        </div>
      </div>
    </>
  );
};

export default Html;
