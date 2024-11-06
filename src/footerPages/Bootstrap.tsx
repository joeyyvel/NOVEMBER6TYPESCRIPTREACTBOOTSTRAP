import GoingBackPage from "./GoingBackPage.tsx";

const Bootstrap = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div className="head bg-primary">
          <p>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors. Code licensed MIT, docs CC
            BY 3.0. Currently v5.3.3.
          </p>
        </div>
        <div>
          <h1>Get started with Bootstrap</h1>
          <p>
            Bootstrap is a powerful, feature-packed frontend toolkit. Build
            anything—from prototype to production—in minutes.{" "}
          </p>
        </div>
        <div
          className="quickStart border-bottom"
          style={{ backgroundColor: "#C0C0C0" }}
        >
          <h3>Quick start</h3>
        </div>
        <div>
          <p>
            1. Create a new index.html file in your project root. Include the
            `meta name=`viewport` tag as well for proper responsive behavior in
            mobile devices.
          </p>
        </div>
        <div>
          <p>
            2. Include Bootstrap’s CSS and JS. Place the link tag in the head
            for our CSS, and the script tag for our JavaScript bundle including
            Popper for positioning dropdowns, poppers, and tooltips before the
            closing /body. Learn more about our CDN links.{" "}
          </p>
        </div>
        <div>
          <p>
            You can also include Popper and our JS separately. If you don’t plan
            to use dropdowns, popovers, or tooltips, save some kilobytes by not
            including Popper.
          </p>
        </div>
        <div>
          <p>
            3. Hello, world! Open the page in your browser of choice to see your
            Bootstrapped page. Now you can start building with Bootstrap by
            creating your own layout, adding dozens of components, and utilizing
            our official examples.
          </p>
        </div>
        <div>
          <h1>CDN links</h1>
          <p>As reference, here are our primary CDN links.</p>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CSS</td>
                <td style={{ color: "red", fontSize: "13px" }}>
                  {" "}
                  https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
                </td>
              </tr>
              <tr>
                <td>JS</td>
                <td style={{ color: "red", fontSize: "13px" }}>
                  {" "}
                  https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1>Next steps</h1>
          <p>
            <span style={{ fontSize: "40px", fontWeight: "bolder" }}> . </span>
            Read a bit more about some important global environment settings
            that Bootstrap utilizes.
          </p>
          <p>
            <span style={{ fontSize: "40px", fontWeight: "bolder" }}> . </span>
            Read about what’s included in Bootstrap in our contents section and
            the list of components that require JavaScript below.
          </p>
          <p>
            <span style={{ fontSize: "40px", fontWeight: "bolder" }}> . </span>
            Need a little more power? Consider building with Bootstrap by
            including the source files via package manager.
          </p>
          <p>
            <span style={{ fontSize: "40px", fontWeight: "bolder" }}> . </span>
            Looking to use Bootstrap as a module with type=`module` Please refer
            to our using Bootstrap as a module section.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bootstrap;
