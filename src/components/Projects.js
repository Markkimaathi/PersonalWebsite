import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSecton";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const spotlightProjects = {
      "Church Management": {
        title: "Church Management",
        desc: "Management of a church using backend technology.",
        techStack: "JavaScript, C#, React.JS, HTML, mySQL, CSS",
        link: "https://github.com/Markkimaathi/churchManagement",
        open: "https://github.com/Markkimaathi/churchManagement",
      },
      "Food delivery": {
        title: "Food Delivery",
        desc: "Simulation of a food delivery app with products.",
        techStack: "NODE.JS, REACT.JS, JavaScript, CSS, HTML",
        link: "https://github.com/Markkimaathi/FoodDelivery",
        open: "https://github.com/Markkimaathi/FoodDelivery",
      },
      CrudApplication: {
        title: "CrudApp",
        desc: "My first CRUD App creation, API.",
        techStack: "C#, NODE.JS",
        link: "https://github.com/Markkimaathi/CrudOperationInNetCore",
        open: "https://github.com/Markkimaathi/CrudOperationInNetCore/",
      },
      ChurchManagementDash: {
        title: "Chuch Dashboard",
        desc: "Simple dashboard for church management",
        techStack: "React.JS, Javascript, Html",
        link: "https://github.com/Markkimaathi/ChurchManagementDashboard",
        open: "https://github.com/Markkimaathi/ChurchManagementDashboard",
      },
      SimpleCalculator: {
        title: "Calculator",
        desc: "A simple calculator which returns results",
        techStack: "JavaScript, Html, Css",
        link: "https://github.com/Markkimaathi/Simple-calculator",
        open: "https://github.com/Markkimaathi/Simple-calculator"
      }
    };

    return (
      <div id="projects">
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(spotlightProjects).map((key, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    />
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">
                    {spotlightProjects[key]["desc"]}
                  </div>
                  <div className="card-tech">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
