import "./intro.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vinay Sehwag</h1>
          <h3>
            Web Developer <span></span>
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
