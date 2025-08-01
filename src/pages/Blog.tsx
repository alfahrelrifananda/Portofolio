import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/Blog.module.css'

export default function Blog() {

  return (
    <>
      <Nav/>
        <div className={Style.container}>
            <header>My Recent Blog</header>
            <br />
            <p>
              Still under Construction..
            </p>
        </div>
      <Footer/>
    </>
  )
}