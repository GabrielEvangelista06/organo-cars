import './Car.css';

export default function Car({ brand, model, releaseDate, imageUrl, backgroundColor }) {
  return (
    <div className="car">
      <div className="header" style={{ backgroundColor }}>
        <img src={imageUrl} alt={model} />
      </div>
      <div className="footer">
        <h4>{model}</h4>
        <h5>{brand}</h5>
        <h5>{releaseDate}</h5>
      </div>
    </div>
  );
}
