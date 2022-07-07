import Link from "next/link";
import {
  BarChartSteps,
  Book,
  BoxArrowLeft,
  PenFill,
  PeopleFill,
  Speedometer,
} from "react-bootstrap-icons";

import { useSelector } from "react-redux";

export default function Navbar(props) {
  const { isMenuOpen } = useSelector((state) => state.utils);
  const isActive = (name) => {
    return props.name == name ? "active" : "";
  };
  return (
    <div className={`l-navbar ${isMenuOpen ? "show-menu" : ""}`} id="nav-bar">
      <nav className="nav">
        <div>
          <Link href={"/"}>
            <a className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">Test</span>
            </a>
          </Link>
          <div className="nav_list">
            <Link href={"/"}>
              <a className={`nav_link ${isActive("dashboard")}`}>
                <Speedometer />
                <span className="nav_name">Dashboard</span>
              </a>
            </Link>
            <Link href={"/users"}>
              <a className={`nav_link ${isActive("users")}`}>
                <PeopleFill />
                <span className="nav_name">Users</span>
              </a>
            </Link>
          </div>
        </div>
        <a href="#" className="nav_link">
          <BoxArrowLeft />
          <span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
  );
}
