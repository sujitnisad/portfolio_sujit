import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import sujit_photo from "../../assets/sujit_photo.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={sujit_photo} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A Frontend developer with 2+ years of experience in creating
              dynamic and responsive web applications using React, Proficient in
              leveraging modern JavaScript frameworks and libraries including
              React Router for seamless navigation, Redux for state management
              and React Query for efficient data fetching.
            </p>
            <p>
              Skilled in Tailwind CSS to build visually appealing and responsive
              designs, Strong problem-solving abilities and a keen eye for
              detail ensure high-quality user interfaces.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "60%" }}></hr>
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "90%" }}></hr>
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }}></hr>
              </div>
              <div className="about-skill">
                <p>React Router</p>
                <hr style={{ width: "80%" }}></hr>
              </div>
              <div className="about-skill">
                <p>React Query</p>
                <hr style={{ width: "90%" }}></hr>
              </div>
              <div className="about-skill">
                <p>Redux</p>
                <hr style={{ width: "70%" }}></hr>
              </div>
              <div className="about-skill">
                <p>Tailwind CSS</p>
                <hr style={{ width: "80%" }}></hr>
              </div>
              <div className="about-skill">
                <p>DSA</p>
                <hr style={{ width: "80%" }}></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>3+</h1>
          <p>OPEN SOURCE CONTRIBUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
