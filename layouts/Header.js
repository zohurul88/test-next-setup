import Head from "next/head";
import Image from "next/image";
import { List } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/reducers/utilsSlice";
import Navbar from "./Navbar";

export default function Header(props) {
  const { isMenuOpen } = useSelector((state) => state.utils);
  const dispatch = useDispatch();
  return (
    <header className={`header ${isMenuOpen ? "body-pd" : ""}`} id="header">
      <div onClick={() => dispatch(toggleMenu())} className="header_toggle">
        <i className="bx bx-menu bx-x" id="header-toggle"></i>
        <List />
      </div>
      <div className="header-title">
        <h4>{props.title ? props.title : ""}</h4>
      </div>
      <div className="header_img">
        <img
          src={`https://d1pl59als66wyw.cloudfront.net/image/0fa02a40-f836-11ec-859e-bf4ee6259914.png`}
          alt="ZI"
        />
      </div>
    </header>
    
  );
}
