import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/Expertise.module.css'

export default function Expertise() {

  return (
    <>
      <Nav/>
        <div className={Style.container}>
            <header>Skills and Expertise</header>
            <br />
            <p>
               With a foundational understanding in software engineering, I am constantly exploring and applying various programming languages and frameworks. While I have areas of particular interest, my approach is always to select the most suitable technology for a given project, ensuring both short-term effectiveness and long-term maintainability.
            </p>
            <br />
            <h4>Technologies Used</h4>
            <br />
            <p>
                The technologies I'm currently working with the most and am most familiar with are highlighted in bold.
                <br />
                <br />
                <h3>
                    <b>Web Development : </b>
                </h3>
                <br />
                 <ul>
                    <li>
                        Wordpress
                    </li>
                    <li>
                        Laravel (Full Stack)
                    </li>
                    <li>
                        Figma (Design prototype)
                    </li>
                    <li>
                        <b>
                            React (Front End)
                        </b>
                    </li>
                </ul>
                <br />
                <h3>
                    <b>Mobile Development : </b>
                </h3>
                <br />
                 <ul>
                    <li>
                        <b>
                            MDC Android (Java and XML)
                        </b>
                    </li>
                    <li>
                        Jetpack Compose
                    </li>
                    <li>
                        Flutter
                    </li>
                </ul>
                <br />
                <h3>
                    <b>Back-end and Database : </b>
                </h3>
                <br />
                 <ul>
                    <li>
                        <b>
                            MySQL
                        </b>
                    </li>
                    <li>
                        <b>
                            Supabase
                        </b>
                    </li>
                    <li>
                        Firebase (For authentication)
                    </li>
                </ul>
                <br />
                <p>Most often with <b>Supabase</b> as the underlying database.</p>
                <br />
                  <h3>
                    <b>Core Programming Languages : </b>
                </h3>
                <br />
                 <ul>
                    <li>
                        JavaScript
                    </li>
                      <li>
                        <b>
                            TypeScript (For React)
                        </b>
                    </li>
                    <li>
                        <b>
                            Java (For Native Android)
                        </b>
                    </li>
                    <li>
                        PHP (Full Stack Laravel)
                    </li>
                </ul>
                <br />
            </p>
            <hr />
            <br />
            <h4>Working Method</h4>
            <br />
            <p>
                My goal is to deliver clean, efficient, readable, and maintainable code that adds value to a project. I aim to apply the following principles in my work : 
                <br />
                <ul>
                    <li>
                        <b>"Always choose the best tool for the job"</b> Selecting technologies based on project requirements and scalability.
                    </li>
                    <li>
                        Prioritizing readability and maintainability for future development.
                    </li>
                    <li>
                        Utilizing Git for collaborative development and tracking changes.
                    </li>
                    <li>
                        Embracing new technologies and best practices to improve my skills.
                    </li>
                    <li>
                        Approaching challenges with a logical and structured mindset.
                    </li>
               </ul>
            </p>
            <br />
            <hr />
            <br />
            <h4>Learning</h4>
            <br />
            <p>
              I am committed to continuous self-education, constantly expanding my knowledge in computer science and beyond. My learning journey also extends to subjects like philosophy and history. These diverse interests enrich my perspective and enhance my analytical thinking.
            </p>
            <br />
        </div>
      <Footer/>
    </>
  )
}