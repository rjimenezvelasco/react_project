import { Fragment } from "react/jsx-runtime";

function Card() {
  return (
    <div
      className="card"
      style={{
        width: "500px",
      }}
    >
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <CardBody />
      </div>
    </div>
  );
}
export default Card;

export function CardBody() {
  return (
    <Fragment>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Fragment>
  );
}
