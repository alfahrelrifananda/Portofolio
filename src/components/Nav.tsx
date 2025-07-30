import Style from "../assets/Nav.module.css"

export default function Nav() {

    function menuToggle() {
        const navbarUl = document.getElementById("navbar-ul")
        navbarUl?.classList.toggle('show')
    }
    
    return (
        <>
        <nav className={Style.Navbar}>
            <div>Alfahrel Rifananda</div>
            <div className={Style.menu} onClick={menuToggle}>Menu</div>
            <ul id="navbar-ul">
                <li><a href="">About</a></li>
                <li><a href="">Expertise</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        </>   
    )
}