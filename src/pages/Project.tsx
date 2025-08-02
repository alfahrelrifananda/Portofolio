import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/Project.module.css'

export default function Project() {

  return (
    <>
      <Nav/>
        <div className={Style.container}>
            <header>My Recent Project</header>
            <br />
            <p>
              Still under Construction..
            </p>
        </div>
      <Footer/>
    </>
  )
}