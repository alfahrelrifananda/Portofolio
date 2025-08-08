import { useEffect } from "react";
import Style from "../assets/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Alfahrel Rifananda";
  }, []);
  return (
    <>
      <Nav />
      <div className={Style.jumbotron}>
        <h1>Alfahrel Rifananda</h1>
        <p>Software, Webdev, Appdev, Philosophy, History</p>
        <ul>
          <li>
            <a href="mailto:pahrel1234@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/alfahrelrifananda">Github</a>
          </li>
          <li>
            <a href="https://m.me/61577039463575?hash=AbYGtFQYcT5RAnrA&source=qr_link_share">
              Messenger
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/relisnotavailable?igsh=OTdvYXo3NzIzZ2xs">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
