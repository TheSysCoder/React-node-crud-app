import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <Link to={"/"}>Gymlance</Link>
          <Link to={"/gyms"}>Gyms</Link>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
