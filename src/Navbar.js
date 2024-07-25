import {Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>The Susma Blog</h1>
      <div>
        <Link to="/clubs">Clubs</Link>
        <Link to="/club/create">Create Clubs</Link>
      </div>
    </nav>
  );
}

export default Navbar;