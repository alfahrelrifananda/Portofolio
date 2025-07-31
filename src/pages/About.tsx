import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/About.module.css'

export default function About() {

  return (
    <>
      <Nav/>
        <div className={Style.container}>
            <header>About Me</header>
            <br />
            <h4>Introduction</h4>
            <br />
            <p>
                My name is Nabillio Alfahrel Rifananda, a fresh graduate in software engineering, currently seeking to pursue further education in the field. I am deeply interested in software development, with a particular focus on front-end web, mobile, and general software applications.
                <br />
                <br />
                 My journey into technology began with a strong curiosity, leading me to explore the intricacies of systems and code.
            </p>
            <br />
            <h4>Work</h4>
            <br />
            <p>
                As a passionate aspiring software engineer, I enjoy building intuitive and engaging applications. My experience spans across various technologies, including Java, XML, TypeScript, and React for front-end and application development. I'm also familiar with database solutions like Supabase and Firebase.
                <br />
                <br />
                During my studies, I developed Chameleon, a mobile application akin to Pinterest, utilizing Flutter with Material 3 and dynamic color features, showcasing my ability to create modern and user-friendly interfaces. Additionally, I am proficient in Figma for design and prototyping.
            </p>
            <br />
            <h4>Career</h4>
            <br />
            <p>
                My fascination with computers and software ignited through encounters with Custom ROMs and GNU/Linux. 
                <br />
                <br />
                This hands-on exploration sparked a profound interest in how software functions at a fundamental level, compelling me to delve deeper into programming and system architecture. This early passion naturally guided me towards a formal education in software engineering, laying the groundwork for my continuous learning journey.
            </p>
            <br />
            <h4>Education</h4>
            <br />
            <p>
                I successfully completed my software engineering education at SMKN 5 Surakarta, graduating in 2025. My time there provided me with a solid foundation in software development principles and practices.
                <br />
                <br />           
                 Looking ahead, I plan to continue my academic journey by studying Software Engineering at UPITRA, aiming to further expand my theoretical knowledge and practical skills in the field. 
            </p>
            <br />
            <h4>Certificates</h4>
            <br />
            <p>
                In addition to my high school diploma, I hold an internship certificate as a WordPress developer from Digimizu Digital Management. 
                <br />
                <br />
                This experience provided me with valuable insight into professional web development environments and real-world project execution.
            </p>
            <br />
            <h4>Leisure</h4>
            <br />
            <p>
                In my spare time, I delve into the world of philosophy, with a particular admiration for Nietzsche, identifying myself as a Nietzchean. This interest complements my technical pursuits by encouraging critical thinking and diverse perspectives. 
                <br />
                <br />
                I also enjoy exploring history, finding value in understanding past events and their impact on the present.
            </p>
        </div>
      <Footer/>
    </>
  )
}
