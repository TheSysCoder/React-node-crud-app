import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <Link to={"/"} className="logo">
            🏋🏻 Gymlance
          </Link>
          <div>
            <Link className="link" to={"/gyms"}>
              Gyms
            </Link>
            <Link className="link" to={"/workouts"}>
              Workouts
            </Link>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
