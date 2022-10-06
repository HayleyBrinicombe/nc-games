import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div>
        <Link className="link-home" to="/">
         Home
        </Link>
        <Link className="links" to="/reviews/strategy">
          Strategy
        </Link>
        <Link className="links" to="/reviews/hidden-roles">
          Hidden Roles
        </Link>
        <Link className="links" to="/reviews/dexterity">
          Dexterity
        </Link>
        <Link className="links" to="/reviews/push-your-luck">
          Push your luck
        </Link>
        <Link className="links" to="/reviews/roll-and-write">
          Roll and write
        </Link>
        <Link className="links" to="/reviews/deck-building">
          Deck building
        </Link>
        <Link className="links" to="/reviews/engine-building">
          Engine building
        </Link>
      </div>
    </div>
  );
}
