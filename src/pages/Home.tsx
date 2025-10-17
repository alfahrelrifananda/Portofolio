import { useEffect } from "react";
import Style from "../assets/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Alfahrel Rifananda";
  }, []);
  
  return (
    <>
      <div className={Style.jumbotron}>
        <h1>Alfahrel Rifananda</h1>
        <p>
          <Link to="/blog" className={Style.aAlternative}>Software, </Link>
          <Link to="/blog" className={Style.aAlternative}>WebDev, </Link>
          <Link to="/blog" className={Style.aAlternative}>AppDev, </Link>
          <Link to="/blog" className={Style.aAlternative}>Product, </Link>
          <Link to="/blog" className={Style.aAlternative}>History</Link>
        </p>
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
            <a href="https://discord.gg/bQVC7JVa">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
