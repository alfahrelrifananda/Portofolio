import Style from "../assets/Footer.module.css"

export default function Footer() {
    return (
        <>
        <footer className={Style.Footer}>
            <div className={Style.copyright}>© 2025 Alfahrel Rifananda</div>
            <p>
                This website is built in a way the internet was meant to be.
            </p>
            <p>
                This means a simple, content-first website, sharing thoughts and knowledge for free.
            </p>
            <p>
                This is why this website has no trackers and no ads.
            </p>
            <br />
            <p>
                Posts: CC-BY-SA | Source code: AGPL-3.0
            </p>
        </footer>
        </>   
    )
}