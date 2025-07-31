import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/Contact.module.css'

export default function Contact() {

  return (
    <>
      <Nav/>
        <div className={Style.container}>
            <header>Contact Me</header>
            <br />
            <p>
              You can email me at <i>pahrel1234@gmail.com</i>, or drop me a message on Telegram.
            </p>
            <br />
            <p>
              Want to connect on Telegram? <a href="https://t.me/Nexuuussss">Feel free to add me.</a> 
            </p>
            <br />
            <p>
              I can also be found on <a href="https://github.com/alfahrelrifananda">Github.</a>
            </p>
            <br />
            <h4>Schedule a call appointment</h4>
            <br />
            <p>
              To prevent phone spam, I don’t publically share my number, but feel free to reach out via email or Instagram to schedule a call.
            </p>
        </div>
      <Footer/>
    </>
  )
}