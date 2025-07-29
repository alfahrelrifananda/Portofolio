import Style from "../assets/Nav.module.css"

export default function Nav() {
    return (
        <>
        <nav className={Style.Navbar}>
            <div>Alfahrel Rifananda</div>
            <ul>
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