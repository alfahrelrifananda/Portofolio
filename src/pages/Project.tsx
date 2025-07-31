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
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas qui architecto reprehenderit ipsam perferendis magnam atque optio, similique quaerat eligendi voluptate beatae, amet nihil quisquam exercitationem praesentium, nesciunt quis rerum aut ea aperiam illum saepe ex? Quasi velit maxime ea sit, vitae quos.
            </p>
        </div>
      <Footer/>
    </>
  )
}