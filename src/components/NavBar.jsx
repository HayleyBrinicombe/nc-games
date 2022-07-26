import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
      <div>
        <Link to="/" className="navigation_link">
          All Reviews
        </Link>
        <Link to="/strategy" className="navigation_link">
          Strategy Reviews
        </Link>
      </div>
    </div>
  );
}
