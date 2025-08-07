import { Link } from "react-router";
import Style from "../assets/Nav.module.css";

export default function Nav() {
  function menuToggle() {
    const navbarUl = document.getElementById("navbar-ul");
    navbarUl?.classList.toggle("show");
  }

  function closeMenu() {
    const navbarUl = document.getElementById("navbar-ul");
    navbarUl?.classList.remove("show");
  }
  return (
    <>
      <nav className={Style.Navbar}>
        <Link to="/" className={Style.logo}>
          Alfahrel Rifananda
        </Link>
        <div className={Style.menu} onClick={menuToggle}>
          Menu
        </div>
        <ul id="navbar-ul">
          <li onClick={closeMenu}>
            <Link to="/about" className={Style.a}>
              About
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/expertise" className={Style.a}>
              Expertise
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/experience" className={Style.a}>
              Experience
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/blog" className={Style.a}>
              Blog
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact" className={Style.a}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
