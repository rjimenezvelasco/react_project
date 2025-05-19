import { Fragment } from "react/jsx-runtime";

interface CardProps {
  body: string;
}

function Card(props: CardProps) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: "500px",
      }}
    >
      <h5 className="card-header">Featured</h5>
      <div className="card-body">{body}</div>
    </div>
  );
}
export default Card;

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <Fragment>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Fragment>
  );
}
