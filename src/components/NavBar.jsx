export default function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
    <div>
          <a href="./" className="active">
        Home
      </a>
      <a href="./users">Change User</a>
      <a href="./categories">Categories</a>
      </div>
      <div className="dropdown">
        <button className="dropbtn"></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}
