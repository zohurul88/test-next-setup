import { Spinner } from "react-bootstrap";

export const Loader = (props) => {
  return (
    <div className={`loader ${props.className ? props.className : ""}`}>
      <Spinner animation="border" role="status">
        {props.loadingText && (
          <span className="visually-hidden">{props.loadingText}</span>
        )}
      </Spinner>
    </div>
  );
};

export default Loader;
