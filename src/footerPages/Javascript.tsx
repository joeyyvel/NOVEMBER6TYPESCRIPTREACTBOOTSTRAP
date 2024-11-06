import "../footerPages/Javascript.css";
import GoingBackPage from "../footerPages/GoingBackPage";

const Javascript = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container p5">
        <div>
          {" "}
          <h1>Few JavaScript Methods You Must Know</h1>{" "}
        </div>

        <div>
          <p>
            JavaScript is a programming language used to create web pages and
            mobile apps. If you have been studying Javascript for so long and
            still it looks scary to you, probably you haven`t learnt these
            methods yet. This article is for all javascript developers at any
            level. If you are looking for a specific method, feel free to jump
            and skip others. If you are familiar with javascript, I recommend
            you to read ES6 The modern Javascript to explore more about JS.
          </p>
          <div>
            <p id="topics">
              1. <strong className="one">Array</strong>{" "}
            </p>
            <p id="topics">
              2. <strong className="one">String</strong>{" "}
            </p>
            <p id="topics">
              3. <strong className="one">Objects</strong>{" "}
            </p>
            <p id="topics">
              4. <strong className="one">Numbers</strong>{" "}
            </p>
            <p id="topics">
              5. <strong className="one">ES6</strong>{" "}
            </p>
          </div>
          <div>
            <h6 className="explore text-success">
              If you are already familiar with the definition of the above
              topics, feel free to explore their methods only.
            </h6>
          </div>
          <div>
            <h1>Array</h1>
            <p>
              You may know that a variable can store only a value at a time, for
              example var student = `jack`, this is totally fine and we may use
              it many times while building a project, however, sometimes it is
              required to collect many values in a single variable like a list
              of students names, this is where we can use the Array concept.
              Array is a single variable that store a list of values and each
              element is specified by a single index.
            </p>
            <p>Array methods</p>
            <p style={{ fontSize: "22px", fontWeight: "bolder" }}>. pop()</p>
            <p>The pop() method removes the last element of an array.</p>
          </div>
          <div className="pop bg-dark text-warning p-3 rounded-4">
            <p> var students = [ `Jack``, `James``, `Robert`, `John``];</p>
            <p> console.log(students);</p>
            <p> students.pop();</p>
            <p> console.log(students)</p>
          </div>
          <div className="popAns bg-dark text-light p-3 rounded-4 mt-3">
            <p>Output:</p>
            <p>[`Jack``, `James``, `Robert``, `John``]</p>
            <p>[`Jack``, `James``, `Robert``]</p>
          </div>
          <div>
            <p className="shift mt-3">
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                . shift()
              </span>
            </p>
            <p>The shift() method removes the first element from an array.</p>
          </div>
          <div className="shift bg-dark text-warning p-3 rounded-4 mt-3">
            <p>var students = [`Jack`, `James`, `Robert`, `John`];</p>
            <p>console.log(students);</p>
            <p>students.shift()</p>
            <p>console.log(students)</p>
          </div>
          <div className="shiftAns bg-dark text-light p-3 rounded-4 mt-3">
            <p>[`Jack`, `James`, `Robert`, `John`]</p>
            <p>[`James`, `Robert``, `John`]</p>
          </div>
          <div>
            <p className="shift mt-3">
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                . push()
              </span>
            </p>
            <p>
              {" "}
              The push() method adds one or more elements to the end of an
              array.
            </p>
            <div className="push bg-dark text-warning p-3 rounded-4 mt-3">
              <p>var students = [`Jack`, `James`, `Robert`, `John`];</p>
              <p>console.log(students);</p>
              <p>students.push(`Zahab`, `Kakar`);</p>
              <p>console.log(students)</p>
            </div>
            <div className="pushOutput bg-dark text-light p-3 rounded-4 mt-3">
              <p>Output:</p>
              <p>[`Jack`, `James`, `Robert`, `John`]</p>
              <p>[`Jack`, `James`, `Robert`, `John`, `Zahab`, `Kakar`]</p>
            </div>
            <div>
              <p className="unshift mt-3">
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  . unshift()
                </span>
              </p>
              <p>
                The unshift() method adds one or more elements to the beginning
                of an array.
              </p>
            </div>
            <div className="unshiftSol bg-dark text-warning p-3 rounded-4 mt-3">
              <p>var students = [`Jack`, `James`, `Robert`, `John`]</p>
              <p>console.log(students);</p>
              <p>students.unshift(`Zahad`, `Kakar`);</p>
              <p>console.log(students)</p>
            </div>
            <div className="unshiftOutput bg-dark text-light p-3 rounded-4 mt-3">
              <p>Output:</p>
              <p>[`Jack`, `James`, `Robert`, `John`]</p>
              <p>[`Zahab`, `Kakar`, `Jack`, `James`, `Robert`, `John`]</p>
            </div>
            <div>
              <p className="length mt-3">
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  . length
                </span>{" "}
              </p>
              <p>The length returns the number of elements in an array.</p>
            </div>
            <div className="length bg-dark text-warning p-3 rounded-4 mt-3">
              <p>var students = [`Jack`, `James`, `Robert`, `John`]</p>
              <p>console.log(students);</p>
              <p>var length = students.length;</p>
              <p>console.log(length)</p>
            </div>
            <div className="lengthOutput bg-dark text-light p-3 rounded-4 mt-3">
              <p> [`Jack`, `James`, `Robert`, `John`]</p>
              <p>4</p>
            </div>
            <div>
              <p className="splice mt-3">
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  . splice()
                </span>
              </p>
              <p>
                The splice() method is used to add new elements to an array.
              </p>
              <div className="splice bg-dark text-warning p-3 rounded-4 mt-3">
                <p>var students = [`Jack`, `James`, `Robert`, `John`]</p>
                <p>console.log(students);</p>
                <p>students.splice(2, 1, `Zahab`, `Kakar`);</p>
                <p>console.log(students);</p>
              </div>
              <div className="spliceOutput bg-dark text-light p-3 rounded-4 mt-3 mb-3">
                <p>Output:</p>
                <p>[`Jack`, `James`, `Robert`, `John`]</p>
                <p>[`Jack`, `James`, `Zahab`, `Kakar`, `John`]</p>
              </div>
              <div>
                <p>
                  As we said before, this method is used to add elements into an
                  array, however, we must indicate that where the new elements
                  should be added. In the above example, 2 indicates the index
                  number where the new elements should be placed and 1 shows the
                  number of elements that should be deleted, as we mentioned 1
                  element should be deleted, we do not have the `Robert` in the
                  second array.
                </p>
              </div>
              <div>
                <p className="concat mt-3">
                  <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                    . concat()
                  </span>
                </p>
                <p>
                  The contact method is used to creates a new array by
                  concatenating or merging existing arrays.
                </p>
                <div className="concat bg-dark text-warning p-3 rounded-4 mt-3">
                  <p>var students = [`Jack`, `James`, `Robert`, `John`]</p>
                  <p>console.log(students);</p>
                  <p>var myFriends = [`Jennifer`, `Mary`, `Patricia`]</p>
                  <p>console.log(myFriends);</p>
                  <p> var allName = students.concat(myFriends);</p>
                  <p>console.log(allNames)</p>
                </div>
                <div className="concatOutput bg-dark text-light p-3 rounded-4 mt-3 mb-3">
                  <p>Output:</p>
                  <p>[`Jack`, `James`, `Robert`, `John`]</p>
                  <p>[`Jennifer`, `Mary`, `Patricia`]</p>
                  <p>
                    [`Jack`, `James`, `Robert`, `John`,`Jennifer`, `Mary`,
                    `Patricia``]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Javascript;
