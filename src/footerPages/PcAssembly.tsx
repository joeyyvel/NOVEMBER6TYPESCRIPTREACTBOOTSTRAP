import React from "react";
import pcPicture from "../images/computer.jpg.webp";
import GoingBackPage from "./GoingBackPage";
const PcAssembly = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div>
          <h1>PC Assembly</h1>
          <h5>Turn your components into a rig you can be proud of.</h5>
        </div>
        <div>
          <img src={pcPicture} alt="PC picture" />
        </div>
        <div>
          <p>
            There are plenty of pre-built gaming PCs on the market, but there’s
            nothing quite like the satisfaction of using one that you assembled
            yourself. While the process of assembling a computer isn’t
            difficult, it’s daunting the first time you do it. For those
            embarking on their first build – or perhaps the first build in
            several years – we’ve put together a step-by-step guide to building
            a PC.{" "}
          </p>
          <p>
            Before we start, know that this is a guide exclusively dedicated to
            assembly. That means you’ll need to pick out your parts first. Our
            list of tested and approved cases, CPUs, GPUs, motherboards, SSDs,
            power supplies and RAM can help you choose key components. Or you
            could check out our Best PC Builds page if you`re looking to
            assemble a system at or under a specific price.
          </p>
          <p>
            The other thing to keep in mind is that no two builds are identical.
            The order we’re going in here is based partly on preference and on
            the needs of our specific build. For instance, if you have a large
            aftermarket cooler that overhangs the RAM slots, you may need to
            install your memory first. Or if you`re installing an AIO cooler
            radiator at the top of your case, you`ll often need to plug in any
            power or fan cables up there before the cooler blocks access to the
            ports and headers.
          </p>
          <p>
            Likewise, if you have a particularly small or cramped case and/or a
            huge high-end graphics card, you may need to install things in a
            slightly different order, since the graphics card will block access
            to many ports, slots and connectors.
          </p>
          <p>
            In short, don`t be surprised if you need to backtrack and pull out a
            part here or there to accommodate the quirks of your particular
            build. But don`t get frustrated, as complications like this are
            common, even for people who have been regularly building PCs for
            decades.
          </p>
        </div>
      </div>
    </>
  );
};

export default PcAssembly;
