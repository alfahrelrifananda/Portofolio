import { useEffect } from "react";
import Style from "../assets/Home.module.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Alfahrel Rifananda";
  }, []);
  return (
    <>
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
            <a href="https://discord.gg/bQVC7JVa">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
