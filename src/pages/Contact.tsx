import Style from "../assets/Contact.module.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Alfahrel Rifananda";
  }, []);
  return (
    <>
      <div className={Style.container}>
        <header>Contact Me</header>
        <br />
        <p>
          You can email me at <i>pahrel1234@gmail.com</i>, or drop me a message
          on{" "}
          <a href="https://m.me/61577039463575?hash=AbYGtFQYcT5RAnrA&source=qr_link_share">
            Messenger.
          </a>
        </p>
        <br />
        <p>
          Want to connect on Instagram?{" "}
          <a href="https://www.instagram.com/fr3l_r?igsh=OTdvYXo3NzIzZ2xs">
            Feel free to DM me.
          </a>
        </p>
        <br />
        <p>
          I can also be found on{" "}
          <a href="https://github.com/alfahrelrifananda">Github.</a>
        </p>
        <br />
        <h4>Schedule a call appointment</h4>
        <br />
        <p>
          To prevent phone spam, I don’t publically share my number, but feel
          free to reach out via email or Instagram to schedule a call.
        </p>
      </div>
    </>
  );
}
