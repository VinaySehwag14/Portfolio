import "./intro.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textref = useRef();

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Stack Web Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img className="imgContainer__image" src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vinay Sehwag</h1>
          <h3>
            Full <span ref={textref}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
};
export default Intro;
