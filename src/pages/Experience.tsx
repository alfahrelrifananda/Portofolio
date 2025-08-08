import Style from "../assets/Experience.module.css";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    document.title = "Experience - Alfahrel Rifananda";
  }, []);
  return (
    <>
      <div className={Style.container}>
        <header>Work experience</header>
        <br />
        <h4>Project</h4>
        <br />
        <p>
          <div className={Style.tableContent}>
            <table className={Style.table}>
              <tr>
                <th>Title</th>
                <th>Technology</th>
                <th>Language</th>
                <th>Position</th>
                <th>Company</th>
              </tr>
              <tr>
                <td>SMPN 8 Solo</td>
                <td>Wordpress and Figma</td>
                <td>PHP</td>
                <td>Prototype and Development</td>
                <td>Digimizu Digital Management</td>
              </tr>
              <tr>
                <td>SMAN 8 Solo</td>
                <td>Wordpress and Figma</td>
                <td>PHP</td>
                <td>Prototype and Development</td>
                <td>Digimizu Digital Management</td>
              </tr>
              <tr>
                <td>Andala Library</td>
                <td>Wordpress and Figma</td>
                <td>PHP</td>
                <td>Prototype and Development</td>
                <td>Digimizu Digital Management</td>
              </tr>
              <tr>
                <td>Pos Psikologi</td>
                <td>Vanilla HTML5, CSS3, and JavaScript</td>
                <td>JavaScript</td>
                <td>Full Stack</td>
                <td>Freelance</td>
              </tr>
            </table>
          </div>
        </p>
        <div className={Style.content}>
          <br />
          <h4>Positions</h4>
          <br />
          <p>
            <b>Freelance</b>
            <p>
              <i>02/2025 - present ~ </i>
              <b>Front-end engineer, Web Developer, Android App Developer</b>
            </p>
            <p>
              Now after finishing my graduate at SMKN 5 Surakarta i find myself
              having a trouble at finding a job that is relevant so i try to
              force myself to try or at least doing something that is (kinda)
              productive in my free time. So i made bunch of app and also this
              website while waiting for me to go to college
            </p>
            <br />
            <b>Digimizu Digital Management</b>
            <p>
              <i>09/2024 - 02/2025 ~ </i>
              <b>Web Developer</b>
            </p>
            <p>
              I was doing an intern at Digimizu while im still in high school
              this experience provide me with lot of benefit, one of which is
              Wordpress. While i was there they gave me a task to create an
              School website made entirely using wordpress for some state
              school. while doing so i get a lot of knowledge of how wordpress,
              cms, and wordpress theme(Divi in particular) work. so that made me
              realize how i can build a website with no code entirely just using
              this kind of tool
            </p>
          </p>
          <br />
          <h4>Volunteer Experience</h4>
          <br />
          <p>
            <b>POS PSIKOLOGI</b>
            <p>
              <i>09/2024 - 02/2025 ~ </i>
              <b>Web Developer</b>
            </p>
            <p>
              When im still in High School my aunt ask me to build her a website
              that is call POS PSIKOLOGI so i Volunteeraly doing just that
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
