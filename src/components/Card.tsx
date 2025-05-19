function Card() {
  const width = {
    width: "500px",
  };
  return (
    <div className="card" style={width}>
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default Card;
