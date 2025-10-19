import { Link } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Alfahrel Rifananda";
  });

  return (
    <>
      <div className="notFoundContainer">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>This page does not exist.</p>
        <Link to={"/"}>Go to Homepage</Link>
      </div>
    </>
  );
}
