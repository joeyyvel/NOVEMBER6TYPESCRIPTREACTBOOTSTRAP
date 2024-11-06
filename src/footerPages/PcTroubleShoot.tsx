import React from "react";
import GoingBackPage from "./GoingBackPage";
const PcTroubleShoot = () => {
  return (
    <>
      <GoingBackPage />
      <div className="container">
        <div
          className="troubleShoot"
          style={{
            height: "200px",
            backgroundColor: "#B0E0E6",
            paddingTop: "10%",
            textAlign: "center",
          }}
        >
          <h1>How to Troubleshoot a Computer</h1>
        </div>
        <div>
          <h6 style={{ color: "green", marginTop: "5%" }}>
            Common Fixes |Speeding Up a Slow Computer |Troubleshooting Network
            Problems |Getting Rid of Pop-Ups and Toolbars |Testing and Replacing
            Hardware |Fixing a Noisy Computer |Expert Q&A
          </h6>
        </div>
        <div style={{ marginTop: "5%" }}>
          <p>
            When your computer misbehaves, it`s useful to know how to
            troubleshoot problems yourself. There are a variety of things that
            could be going wrong with your computer, but you can usually track
            down and fix the problem on your own.{" "}
          </p>
        </div>
        <div>
          <p>
            1 Reboot your computer. It may seem like a simple suggestion, but
            rebooting your computer will fix many of the problems you may be
            having. Press the Power button or use the Shut Down command to
            safely turn the computer off. If the computer is not responding,
            press and hold the Power button for about five seconds to force the
            computer to power off.
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>.</span>{" "}
            Allow your computer to sit for about thirty seconds after being
            turned off before you turn it back on again.
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>.</span> If
            your computer isn’t restarting, you may not be getting any power.[1]
          </p>
        </div>
        <div>
          <p>
            2 Try to determine what caused the problem you are having. Think
            back to when the computer started having issues. Was a certain
            program installed, or a change made to the hardware? Was something
            suspicious downloaded, or installed with a program you got? Was
            there a power outage and now things aren`t working correctly?
            Narrowing down the possible cause of the problem will make it much
            easier to determine how to proceed.
          </p>
        </div>
        <div>
          <p>
            3 Check all of the cables. A loose power cable could be preventing
            your computer from booting up. A bad surge protector could be the
            culprit. Your keyboard or mouse may have come unplugged. Your
            monitor cable might be loose. Checking all of your connections will
            only take a moment
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>.</span> Be
            specific with your search. Include the program`s name and your
            operating system. Search for the exact error message along with any
            error codes. Focus on keywords that describe your problem. Try to
            narrow it down to your situation as much as possible.
          </p>
        </div>
      </div>
    </>
  );
};

export default PcTroubleShoot;
