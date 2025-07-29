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
          <li><a href="">Email</a></li>
          <li><a href="">Github</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
      </div>
      <Footer/>
    </>
  )
}

export default App
