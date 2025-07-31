import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav/>
      <div className='jumbotron'>
        <h1>Alfahrel Rifananda</h1>
        <p>Software, Webdev, Appdev, Philosophy, History</p>
        <ul>
          <li><a href="mailto:pahrel1234@gmail.com">Email</a></li>
          <li><a href="https://github.com/alfahrelrifananda">Github</a></li>
          <li><a href="https://t.me/Nexuuussss">Telegram</a></li>
          <li><a href="https://www.instagram.com/fr3l_r?igsh=OTdvYXo3NzIzZ2xs">Instagram</a></li>
        </ul>
      </div>
      <Footer/>
    </>
  )
}

export default App
