import "./about.css";
import Logo from "../../img/project.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-bg"></div>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Logo}
            alt="Project logo"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <h6 className="a-sub">
            A greate knowledge on  Python , Html/Css , Javascript and ReactJs and a beginner in ExpressJs.

        </h6>
        <h6 className="a-sub">
          StoryWriter and Loves listening to music.I also enjoying playing Volley Ball as a hobby.
        </h6>
       
        
        <div className="a-award">
          <div className="a-award-texts">
                <h3 className="a-award-title"><b>MULTITALENTED.CREATIVE.DEDICATED.</b></h3>
                <button className="a-award-desc">
                    DOWNLOAD MY CV
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

