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
        <Link to="/hidden-roles" className="navigation_link">
          Hidden Roles Reviews
        </Link>
        <Link to="/dexterity" className="navigation_link">
          Dexterity Reviews
        </Link>
        <Link to="/push-your-luck" className="navigation_link">
          Push your luck Reviews
        </Link>
        <Link to="/roll-and-write" className="navigation_link">
          Roll and write Reviews
        </Link>
        <Link to="/deck-building" className="navigation_link">
          Deck building Reviews
        </Link>
        <Link to="/engine-building" className="navigation_link">
          Engine building Reviews
        </Link>
      </div>
    </div>
  );
}
