import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav/>
      <div className="notFoundContainer">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>This page does not exist.</p>
        <Link to={"/"}>Go to Homepage</Link>
      </div>
      <Footer/>
    </>
  );
}
