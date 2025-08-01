import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/Experience.module.css'

export default function Experience() {

  return (
    <>
      <Nav/>
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
                <tr>
                    <td>Chameleon</td>
                    <td>Flutter</td>
                    <td>Dart</td>
                    <td>Developer</td>
                    <td>Freelance</td>
                </tr>
                <tr>
                    <td>Rel Weather</td>
                    <td>MDC Android</td>
                    <td>Java</td>
                    <td>Developer</td>
                    <td>Freelance</td>
                </tr>
                <tr>
                    <td>Rel Wallpaper</td>
                    <td>MDC Android</td>
                    <td>Java</td>
                    <td>Developer</td>
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
               <b>Digimizu Digital Management</b>
               <p>
                <i>09/2024 - 02/2025 ~ </i>
                <b>Web Developer</b>
               </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ullam accusamus aperiam sunt voluptatum animi illo sint ad at unde est magnam hic?</p>
               <br />
               <b>Freelance</b>
               <p>
                <i>02/2025 - present ~ </i>
                <b>Front-end engineer, Web Developer, Android App Developer</b>
               </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ullam accusamus aperiam sunt voluptatum animi illo sint ad at unde est magnam hic?</p>
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
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ullam accusamus aperiam sunt voluptatum animi illo sint ad at unde est magnam hic?</p>
            </p>
           </div>
        </div>
      <Footer/>
    </>
  )
}