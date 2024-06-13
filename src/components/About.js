import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSecton";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently an Intern <b>Software developer</b> at
        <a href="https://technobraingroup.com/"> TechnoBrain</a>, working in the solutions
        sector. At the same time, I am undertaking a 
        program in <b>Computer Science </b>at{" "}
        <a href="https://www.daystar.ac.ke/">Daystar University</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games, as well as watch alot of anime.
      </p>
    );

    const tech_stack = [
      "C++",
      "MySQL",
      "React.js",
      "Python",
      "Javascript",
      "C#"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;