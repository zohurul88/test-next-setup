import { useSelector } from "react-redux";
export default function MainBody(props) {
  const { isMenuOpen } = useSelector((state) => state.utils);
  return (
    <div className={`main-body ${isMenuOpen ? "body-pd" : ""}`}>
      <div className="height-100 body-wrapper">{props.children}</div>
    </div>
  );
}
