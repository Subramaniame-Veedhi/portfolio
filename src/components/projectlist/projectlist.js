import "./projectlist.css";
import Project from "../projects/project";
import { projects } from "../data";
import "../../img/P2.png"

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-bg"></div>
      <div className="pl-texts">
        <h1 className="pl-title"><b>MY  PROJECTS</b></h1>
        <h3 className="pl-desc">
          A selection of my best Projects .
        </h3>
        <p className="pl-desc">(including this website)</p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;